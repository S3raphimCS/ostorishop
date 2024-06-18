from pathlib import Path
from os import getenv
import os
from dotenv import load_dotenv

from utils.typing import SecondTo

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

CORS_ALLOW_CREDENTIALS = True

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / 'templates',
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'

# Настройки для Postgres'a
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': getenv("POSTGRES_DB", 'root'),
        'USER': getenv("POSTGRES_USER", 'root'),
        'PASSWORD': getenv("POSTGRES_PASSWORD", 'root'),
        'HOST': getenv("POSTGRES_HOST", 'pgdb'),
        'PORT': getenv("POSTGRES_PORT", '5432'),
    }
}

# Password validation
PASSWORD_RESET_TIMEOUT = SecondTo.ONE_HOUR * 24

# Переопределение UserModel
AUTH_USER_MODEL = 'authentication.CustomUser'

# Internationalization
LANGUAGE_CODE = 'ru'

TIME_ZONE = 'Asia/Vladivostok'

USE_I18N = True

USE_TZ = True

# Static and media files
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media/'

#STATICFILES_DIRS = [
#    BASE_DIR / "static",
#]

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Настройки почты
EMAIL_USE_TLS = getenv("EMAIL_USE_TLS", "set_in_prod")
EMAIL_HOST = getenv("EMAIL_HOST", "set_in_prod")
EMAIL_HOST_USER = getenv("EMAIL_HOST_USER", "set_in_prod")
EMAIL_HOST_PASSWORD = getenv("EMAIL_HOST_PASSWORD", "set_in_prod")
EMAIL_PORT = getenv("EMAIL_PORT", "set_in_prod")

# Yookassa settings
YOOKASSA_ACCOUNT_ID = getenv("YOOKASSA_ACCOUNT_ID", None)
YOOKASSA_SECRET_KEY = getenv("YOOKASSA_SECRET_KEY", None)

# DRF yasg
SWAGGER_SETTINGS = {
    'LOGIN_URL': '/api/auth/user/login/',
    'LOGOUT_URL': '/api/auth/user/logout/',
    'SECURITY_DEFINITIONS': {
        'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
        }
    }
}

# Cache
REDIS_HOST = getenv("REDIS_HOST")
REDIS_PORT = getenv("REDIS_PORT")
CACHE_REDIS_DB = getenv("CACHE_REDIS_DB")
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/{CACHE_REDIS_DB}",
        "OPTION": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient"
        },
        "KEY_PREFIX": "cache"
    },
    "test": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
    }
}

# Channels
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(REDIS_HOST, REDIS_PORT)]
        }
    }
}

# CKEditor settings
customColorPalette = [
    {
        'color': 'hsl(4, 90%, 58%)',
        'label': 'Red'
    },
    {
        'color': 'hsl(340, 82%, 52%)',
        'label': 'Pink'
    },
    {
        'color': 'hsl(291, 64%, 42%)',
        'label': 'Purple'
    },
    {
        'color': 'hsl(262, 52%, 47%)',
        'label': 'Deep Purple'
    },
    {
        'color': 'hsl(231, 48%, 48%)',
        'label': 'Indigo'
    },
    {
        'color': 'hsl(207, 90%, 54%)',
        'label': 'Blue'
    },
]

CKEDITOR_5_CONFIGS = {
    'default': {
        'toolbar': ['heading', '|', 'bold', 'italic', 'link',
                    'bulletedList', 'numberedList', 'blockQuote', 'imageUpload', ],

    },
    'extends': {
        'blockToolbar': [
            'paragraph', 'heading1', 'heading2', 'heading3',
            '|',
            'bulletedList', 'numberedList',
            '|',
            'blockQuote',
        ],
        'toolbar': ['heading', '|', 'outdent', 'indent', '|', 'bold', 'italic', 'link', 'underline', 'strikethrough',
                    'code', 'subscript', 'superscript', 'highlight', '|', 'codeBlock', 'sourceEditing', 'insertImage',
                    'bulletedList', 'numberedList', 'todoList', '|', 'blockQuote', 'imageUpload', '|',
                    'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'mediaEmbed', 'removeFormat',
                    'insertTable', ],
        'image': {
            'toolbar': ['imageTextAlternative', '|', 'imageStyle:alignLeft',
                        'imageStyle:alignRight', 'imageStyle:alignCenter', 'imageStyle:side', '|'],
            'styles': [
                'full',
                'side',
                'alignLeft',
                'alignRight',
                'alignCenter',
            ]

        },
        'table': {
            'contentToolbar': ['tableColumn', 'tableRow', 'mergeTableCells',
                               'tableProperties', 'tableCellProperties'],
            'tableProperties': {
                'borderColors': customColorPalette,
                'backgroundColors': customColorPalette
            },
            'tableCellProperties': {
                'borderColors': customColorPalette,
                'backgroundColors': customColorPalette
            }
        },
        'heading': {
            'options': [
                {'model': 'paragraph', 'title': 'Paragraph', 'class': 'ck-heading_paragraph'},
                {'model': 'heading1', 'view': 'h1', 'title': 'Heading 1', 'class': 'ck-heading_heading1'},
                {'model': 'heading2', 'view': 'h2', 'title': 'Heading 2', 'class': 'ck-heading_heading2'},
                {'model': 'heading3', 'view': 'h3', 'title': 'Heading 3', 'class': 'ck-heading_heading3'}
            ]
        }
    },
    'list': {
        'properties': {
            'styles': 'true',
            'startIndex': 'true',
            'reversed': 'true',
        }
    }
}

SITE_NAME = "Ostori Shop"
