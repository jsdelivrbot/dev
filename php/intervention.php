// http://image.intervention.io/

// include composer autoload
require 'vendor/autoload.php';

// import the Intervention Image Manager Class
use Intervention\Image\ImageManagerStatic as Image;

// limit image size
public function limit_size($path)
{
  // read image from file
  $img = Image::make($path);
  
  $max_width = 1000;
  $max_height = 1000;

  if ($img->width() > $max || $img->height() > $max) {
    // resize to maximum width and maxium height
    $img
      ->resize($max_width, $max_height, function ($constraint) {
        // constraining the aspect ratio
        $constraint->aspectRatio();
        // prevent possible upsizing
        $constraint->upsize();
      })
      
    return true;
  }
}
