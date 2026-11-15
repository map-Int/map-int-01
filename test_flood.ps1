Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\HP\.gemini\antigravity\brain\1109bf2f-70d9-4474-a63f-d0f07a19423f\emblem_crop_test.png")
$w = $src.Width
$h = $src.Height

# Create 32-bit ARGB bitmap
$outBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Copy all pixels first
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $src.GetPixel($x, $y)
        $outBmp.SetPixel($x, $y, $c)
    }
}

# Flood fill from border pixels that are white (R>240, G>240, B>240)
$visited = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

for ($x = 0; $x -lt $w; $x++) {
    $c0 = $outBmp.GetPixel($x, 0)
    if ($c0.R -gt 238 -and $c0.G -gt 238 -and $c0.B -gt 238) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, 0)))
        $visited[$x, 0] = $true
    }
    $c1 = $outBmp.GetPixel($x, $h - 1)
    if ($c1.R -gt 238 -and $c1.G -gt 238 -and $c1.B -gt 238) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, $h - 1)))
        $visited[$x, $h - 1] = $true
    }
}

for ($y = 0; $y -lt $h; $y++) {
    $c0 = $outBmp.GetPixel(0, $y)
    if ($c0.R -gt 238 -and $c0.G -gt 238 -and $c0.B -gt 238) {
        $queue.Enqueue((New-Object System.Drawing.Point(0, $y)))
        $visited[0, $y] = $true
    }
    $c1 = $outBmp.GetPixel($w - 1, $y)
    if ($c1.R -gt 238 -and $c1.G -gt 238 -and $c1.B -gt 238) {
        $queue.Enqueue((New-Object System.Drawing.Point($w - 1, $y)))
        $visited[$w - 1, $y] = $true
    }
}

$dx = @(0, 0, 1, -1)
$dy = @(1, -1, 0, 0)

while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    $outBmp.SetPixel($pt.X, $pt.Y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
    
    for ($i = 0; $i -lt 4; $i++) {
        $nx = $pt.X + $dx[$i]
        $ny = $pt.Y + $dy[$i]
        if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
            if (-not $visited[$nx, $ny]) {
                $visited[$nx, $ny] = $true
                $nc = $outBmp.GetPixel($nx, $ny)
                if ($nc.R -gt 238 -and $nc.G -gt 238 -and $nc.B -gt 238) {
                    $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
                }
            }
        }
    }
}

$transparentPath = "C:\Users\HP\.gemini\antigravity\brain\1109bf2f-70d9-4474-a63f-d0f07a19423f\emblem_transparent.png"
$outBmp.Save($transparentPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Transparent emblem saved to $transparentPath"
$outBmp.Dispose()
$src.Dispose()
