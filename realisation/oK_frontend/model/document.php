<?php
class Document implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id' => $this->_id,
			 'id' => $this->_id_client,
             'name' => $this->_name,
             'date_expiration' => $this->_date_expiration,
             'etat' => $this->_etat,
    	
        );
    }
	private $_id;
	private $_id_client;
	private $_name;
	private $_date_expiration;
	private $_etat;
	

	public function __construct() {
		
	}

		public function getid() { return $this->_id; }
		public function getname() { return $this->_name; }
		public function getdate_expiration() { return $this->_date_expiration; }
		public function getetat() { return $this->_etat; }
		


		public function setid($id){
			$this->_id = (int) $id;
		}

		public function setid_client($id){
			$this->_id_client = (int) $id;
		}  

		public function setname($name){
					$this->_name = $name;
			}
		
		public function setdate_expiration($date_expiration){	
					$this->_date_expiration = $date_expiration;
			}
		

		public function setetat($etat){
				$this->_etat = $etat;
		}



}
?>