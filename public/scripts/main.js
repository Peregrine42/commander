(function() {
    requirejs.config(
        {
            paths: {
                'jquery': 'lib/jquery-1.10.2'
            }
        }
    );
 
    require(
        ['maps'],
        function(maps) {
            var id = 55;
            maps.getTextMap();
        }
    );
})();

// function changePos() {
// 	$("#my-rectangle").css("left", "200px")
// }

// $(document).keydown(function(e) {
// 	switch(e.which) {
// 		// left = 37, up = 38, down = 40
// 		// right
// 		case 39:
// 			changePos()
// 		break;
// 		default: return;
// 	}
// 	e.preventDefault();
// });