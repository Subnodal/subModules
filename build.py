# subModules
# 
# Copyright (C) Subnodal Technologies. All Rights Reserved.
# 
# https://subnodal.com
# Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.

import os
import shutil
import pathlib
import subprocess

if os.path.exists("build") and os.path.isdir("build"):
    shutil.rmtree("build")

pathlib.Path("build").mkdir(parents = True, exist_ok = True)

subprocess.Popen(["terser", "submodules.js", "-o", os.path.join("build", "submodules.min.js"), "-m"])