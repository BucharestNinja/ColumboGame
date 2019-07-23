from django.shortcuts import render

# Create your views here.
def member(request):
    params = {
        'memberNo'   : 'request.GET.get(‘param’, None)'
    }
    return render(request, 'hello/index.html', params)
