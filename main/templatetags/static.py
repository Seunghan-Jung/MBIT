from django import template
from django.templatetags.static import StaticNode, register

register = template.Library()

from datetime import date

class CustomStaticNode(StaticNode):
    
    def url(self, context):
        version = date.today()
        path = f'{super().url(context)}?v={version}'
        return path
    

@register.tag('static')
def do_static(parser, token):
    node = CustomStaticNode.handle_token(parser, token)
    return node