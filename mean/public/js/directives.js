app.directive("superman", function() {
    return { 
	restrict:"E",
	scope:{},
	template:"<div class='label'>Here I am</div>"
	    }
})

app.directive("wonderwoman", function() {
    return {
	restrict:"E",
	template:"{{bookmarks}}"
    }
})

