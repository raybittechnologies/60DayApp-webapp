$src = "C:\Users\Arooj Bhat\.gemini\antigravity\brain\bd0bde42-6984-4e4b-bcbb-966de31e6000"
$dst = "C:\Users\Arooj Bhat\60dayapp\src\assets\images"

Copy-Item "$src\team_eshan_1775623469919.png" "$dst\team_eshan.png" -Force
Copy-Item "$src\team_aamir_1775623486212.png" "$dst\team_aamir.png" -Force
Copy-Item "$src\team_basit_1775623502392.png" "$dst\team_basit.png" -Force
Copy-Item "$src\team_zahid_1775623524238.png" "$dst\team_zahid.png" -Force
Copy-Item "$src\team_bisma_1775623538948.png" "$dst\team_bisma.png" -Force
Copy-Item "$src\team_jasia_1775623557047.png" "$dst\team_jasia.png" -Force

Write-Host "Done copying team images."
