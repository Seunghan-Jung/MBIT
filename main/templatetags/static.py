from django import template
from django.templatetags.static import StaticNode, register

register = template.Library()

from datetime import datetime

class CustomStaticNode(StaticNode):
    
    def url(self, context):
        version = datetime.now().strftime('%Y-%m-%d-%H')
        path = f'{super().url(context)}?v={version}'
        return path
    

@register.tag('static')
def do_static(parser, token):
    node = CustomStaticNode.handle_token(parser, token)
    return node