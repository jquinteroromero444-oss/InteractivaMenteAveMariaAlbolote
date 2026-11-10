param(
    [int]$Port = 8080,
    [string]$Root = ""
)

if ([string]::IsNullOrWhiteSpace($Root)) {
    $Root = $PSScriptRoot
    if ([string]::IsNullOrWhiteSpace($Root)) {
        $Root = "C:\Users\Alumno\.gemini\antigravity\scratch\interactivamente"
    }
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Error "No se pudo iniciar el listener en $($prefix): $_"
    exit 1
}

Write-Output "============================================================"
Write-Output " Servidor web local de InteractivaMente iniciado con éxito"
Write-Output " URL: $prefix"
Write-Output " Directorio raíz: $Root"
Write-Output " Presione Ctrl+C en cualquier momento para detener"
Write-Output "============================================================"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath) -or $urlPath -eq "/") {
            $urlPath = "index.html"
        }

        $decodedPath = [System.Uri]::UnescapeDataString($urlPath)
        $fullPath = [System.IO.Path]::GetFullPath((Join-Path $Root $decodedPath))

        # Evitar Directory Traversal
        if (-not $fullPath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
            $response.StatusCode = 403
            $msg = [System.Text.Encoding]::UTF8.GetBytes("403 Prohibido")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
            $response.Close()
            continue
        }

        if (Test-Path $fullPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            
            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Output "[$(Get-Date -Format 'HH:mm:ss')] 200 OK: $urlPath"
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 No encontrado: $urlPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
            Write-Output "[$(Get-Date -Format 'HH:mm:ss')] 404 Not Found: $urlPath"
        }
        $response.Close()
    } catch {
        Write-Output "Error al procesar solicitud: $_"
    }
}
