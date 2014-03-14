<?php
$con=mysqli_connect("localhost","generic-submit","8sfb7032b87vFY&BSDF&*FD723rb87wrf&D*FB78dhfbdfsfa8bsdy0bf7y9a7dsvft","syriadata");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO master
(ID, Title, Source, Hyperlink, Location, Theme, Format, Frequency, Strengths, Weaknesses) VALUES
('911', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title');"

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "1 record added";

mysqli_close($con);
?>