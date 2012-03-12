<?php

switch($_GET["module"]){
	case 'skillsGrid':
			$arrayData[0]['skillName'] = 'Java';
			$arrayData[0]['skillLevel'] = 3;
			
			$arrayData[1]['skillName'] = 'C/C++';
			$arrayData[1]['skillLevel'] = 2;
			
			$arrayData[2]['skillName'] = 'SQLServer';
			$arrayData[2]['skillLevel'] = 3;
			
			$arrayData[3]['skillName'] = 'Oracle';
			$arrayData[3]['skillLevel'] = 1;
			
			$arrayData[4]['skillName'] = 'Administration Linux';
			$arrayData[4]['skillLevel'] = 2;
		break;
	case 'projectResume':
		$arrayData[0]["name"] = "Mon premier Projet !!";
		$arrayData[0]["project_manager"] = "rudy";
		$arrayData[0]["resources"] = 3;
		$arrayData[0]["start"] = "01/03/2012";
		$arrayData[0]["end"] = "01/05/2012";
		$arrayData[0]["progress"]="20%";
		$arrayData[0]["state"]="En cours";
		$arrayData[0]["nb_tasks_in_progress"]=3;
		$arrayData[0]["nb_tasks_closed"]=5;
		$arrayData[0]["nb_tasks_canceled"]=0;
		$arrayData[0]["nb_tasks_open"]=10;

		break;
}


echo json_encode($arrayData);

?>