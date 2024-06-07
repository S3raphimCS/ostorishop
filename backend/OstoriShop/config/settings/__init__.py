from os import getenv

from .base import *

if getenv("OSTORI_ENV") == "PRODUCTION":
    from .production import *
else:
    from .develop import *
