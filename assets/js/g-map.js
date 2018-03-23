   
  var locations = [
    ['<h4 style="margin:0;color:#b243d2;text-align:center;">Marraige</h4><b>Kyadagi Ganapathi Temple<b>', 14.3536721,74.7603455],
    ['<h4 style="margin:0;color:#b243d2;text-align:center;">Reception</h4><b>Grooms House, Benkatavalli<b>', 14.125399,74.9780523]
];

var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(14.25, 74.98),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
}