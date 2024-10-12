import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import AdminUserForm from "../forms/AdminUserForm/AdminUserForm";
const AddUserModal = ({ open, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose}>
      
      <DialogContent sx={{backgroundColor:'#e94e1b'}} >
          <AdminUserForm onClose={onClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Kapat
          </Button>
        </DialogActions>
      </Dialog> 
    );
  };
  
  export default AddUserModal;
  