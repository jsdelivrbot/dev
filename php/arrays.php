<?php
$people = array(
   array('id'=>1, 'email'=>'john.smith@hotmail.com'),
   array('id'=>2, 'email'=>'paul.allen@microsoft.com'),
   array('id'=>3, 'email'=>'james.johnston@gmail.com'),
   array('id'=>4, 'email'=>'steve.buscemi@yahoo.com'),
   array('id'=>5, 'email'=>'doug.simons@hotmail.com')
);
?>

<?php foreach ($people as $person): ?>
	<tr>
		<td><?=$person['first_name'];?></td>
		<td><?=$person['last_name'];?></td>
		<td><?=$person['email'];?></td>
		<td><button class="info-popup" data-name="<?=$person['first_name'];?> <?=$person['last_name'];?>" data-email="<?=$person['email'];?>">alert info</button></td>
	</tr>
<?php endforeach; ?>

