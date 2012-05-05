var RB = (function() {

    function loadGithubProjects(anchor) {
	$.getJSON('https://api.github.com/users/renaudb/repos?type=owner', function(data) {
	    items = [];

	    data.sort(function(r1, r2) {
		return Date.parse(r2.pushed_at) - Date.parse(r1.pushed_at);
	    })

	    $.each(data, function(i, val) {
		items.push('<li>'
			   + '<a href="' + val.html_url + '">' + val.name + '</a>'
			   + '<span class="home-list-right">' + (val.language ? val.language : '-') + '</span>'
			   + '</li>');
	    });

	    anchor.html(items.join(''));
	});
    }

    return {
	loadGithubProjects : loadGithubProjects
    }

})();

function loadGithubProjects() {

}

$(document).ready(function () {
    if ($('#github-project-list').length) {
	RB.loadGithubProjects($('#github-project-list'));
    }
});
