#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Orbitron fonts (using variable font version)
curl -L "https://fonts.gstatic.com/s/orbitron/v31/yMJlPIZbZDysHwqHWkCp0JtnKIysCgE.woff2" -o public/fonts/Orbitron-Regular.woff2
curl -L "https://fonts.gstatic.com/s/orbitron/v31/yMJlPIZbZDysHwqHWkCp0JtnKIysCgE.woff2" -o public/fonts/Orbitron-Medium.woff2
curl -L "https://fonts.gstatic.com/s/orbitron/v31/yMJlPIZbZDysHwqHWkCp0JtnKIysCgE.woff2" -o public/fonts/Orbitron-SemiBold.woff2
curl -L "https://fonts.gstatic.com/s/orbitron/v31/yMJlPIZbZDysHwqHWkCp0JtnKIysCgE.woff2" -o public/fonts/Orbitron-Bold.woff2

# Download Share Tech Mono font
curl -L "https://fonts.gstatic.com/s/sharetechmono/v15/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2" -o public/fonts/ShareTechMono-Regular.woff2

# Download JetBrains Mono fonts
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2" -o public/fonts/JetBrainsMono-Regular.woff2
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8-KxTOlOV.woff2" -o public/fonts/JetBrainsMono-Medium.woff2

echo "Fonts downloaded successfully!" 