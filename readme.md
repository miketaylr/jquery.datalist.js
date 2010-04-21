# HTML5 datalist plugin v.0.1
### Copyright (c) 2010-The End of Time, Mike Taylor, http://miketaylr.com
### MIT Licensed: http://www.opensource.org/licenses/mit-license.php

Enables cross-browser html5 datalist for inputs, by first testing
for a native implementation before building one.


## USAGE: 
`$('input[list]').datalist();`

    <input type="search" autofocus list="suggestions">
    <datalist id="suggestions">
        <select>
        <option label="DM" value="Depeche Mode"></option>
        <option label="Moz" value="Morrissey"></option>
        <option label="NO" value="New Order"></option>
        <option label="TC" value="The Cure"></option>
      </select>
    </datalist>