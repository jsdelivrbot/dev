<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Mailing List Confirmation</title>
    </head>

    <body>
        <form id="form1" name="form1" method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
            <table class="formatTblClass">
<!--                <tr>
                    <th colspan="6"><?php// $message; ?></th>
                </tr>
                <tr>
                    <td width="68"><span>First Name</span></td>
                    <td width="215"><input class="<?php// $aClass; ?>" type="text" name="fn" id="fn" /></td>
                    <td width="62"><span>Last Name</span></td>
                    <td colspan="3"><input class="<?php// $aClass; ?>" name="ln" type="text" id="ln" size="50" /></td>
                </tr>-->
                <tr>
                    <th colspan="6"><?php $message; ?></th>
                </tr>
                <tr>
                    <td><span>Email</span></td>
                    <td><input class="<?php $aClass; ?>" type="text" name="email" id="email" /></td>
                    <td><input name="emailMe" type="checkbox" id="emailMe" value="Yes" checked="checked" /></td>
                    <td>Keep me on your mailling list</td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div>
                            <input type="submit" name="Submit" id="Submit" value="Submit" />
                            <input type="reset" name="Reset" id="button" value="Reset" />
                        </div></td>
                </tr>
            </table>
        </form>
        
        
        <?php

        //$fn = $_POST['fn'];
        //$ln = $_POST['ln'];
        $email = $_POST['email'];
        $emailMe = (isset($_POST['emailMe'])) ? $_POST['emailMe'] : 'No';

        //validate

//        if (empty($fn) || empty($ln) || empty($email)) {//show the form
        if (empty($email)) {//show the form
            $message = 'Fill in areas in red!';
            $aClass = 'errorClass';

            } else {
                //this is where the creating of the csv takes place
//                $cvsData = $fn . "," . $ln . "," . $email . "," . $emailMe . "\n";
                $cvsData = $email . "," . $emailMe . "\n";
                $fp = fopen("mailling-list/mail-list.csv", "a"); // $fp is now the file pointer to file $filename

                if ($fp) {
                    fwrite($fp, $cvsData); // Write information to the file
                    fclose($fp); // Close the file
                }
                
                
            }


        ?>
        
    </body>
</html>