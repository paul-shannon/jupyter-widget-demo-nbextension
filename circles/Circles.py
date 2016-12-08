
import ipywidgets as widgets
from traitlets import Unicode, Int, List
@widgets.register('circles.Circles')

class Circles(widgets.DOMWidget):
    """"""
    _view_name = Unicode('CircleView').tag(sync=True)
    _model_name = Unicode('CircleModel').tag(sync=True)
    _view_module = Unicode('circles-pkg').tag(sync=True)
    _model_module = Unicode('circles-pkg').tag(sync=True)
    value = Unicode('Circle Galaxy!').tag(sync=True)
    circleCount = Int(0).tag(sync=True)
    newCircleRequest = List().tag(sync=True)

    def drawCircle(self, x, y, radius):
       newCircle = {"x": x,  "y": y, "radius": radius};
          # allow for two successive identical circles, which does not,
          # constitute change to newCircleRquest in some "deep copy" sense, 
          # by explicitly assigning an empty array, the new assignment
          # is guaranteed to be sync'ed to the browser
       self.newCircleRequest = [];
       self.newCircleRequest = [newCircle];
        
    def getCount(self):
       return(self.circleCount);
