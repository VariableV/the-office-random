function rand_episode(){
	var epi = episodes[Math.floor((Math.random()*193)+1)];
	document.getElementById('title').text="s"+epi.season+"e"+epi.episode+": "+epi.title;
}