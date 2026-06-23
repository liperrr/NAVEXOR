Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\felip\OneDrive\Documents\PROJETOS\SITE NAVEXOR\WhatsApp_Image_2026-06-14_at_19.46.59-removebg-preview.png")
$bmp = new-object System.Drawing.Bitmap($img)
$colors = @{}
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $color = $bmp.GetPixel($x, $y)
        if ($color.A -gt 200 -and ($color.R -lt 250 -or $color.G -lt 250 -or $color.B -lt 250)) {
            $hex = "#$($color.R.ToString('X2'))$($color.G.ToString('X2'))$($color.B.ToString('X2'))"
            if ($colors.ContainsKey($hex)) { $colors[$hex]++ } else { $colors[$hex] = 1 }
        }
    }
}
$img.Dispose()
$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5 | ForEach-Object { Write-Host "$($_.Name) : $($_.Value)" }
