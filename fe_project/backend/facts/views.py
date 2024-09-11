from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader
from .models import Fact
from django.views import generic


# Create your views here.


class IndexView(generic.ListView):
    template_name = "facts/index.html"
    context_object_name = "facts_list"

    def get_queryset(self):
        """Return the last five published questions."""
        return Fact.objects.all()

class DetailView(generic.DetailView):
    model = Fact
    template_name = "facts/fact_detail.html"


