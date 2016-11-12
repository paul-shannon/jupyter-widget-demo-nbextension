from ._version import version_info, __version__

from .Circles import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'circles-pkg',
        'require': 'circles-pkg/extension'
    }]
