import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import AdminCustomerForm from "../forms/AdminCustomerForm/AdminCustomerForm";
const AddCustomerModal = ({ open, onClose }) => {
    return (
      <Dialog  open={open} onClose={onClose}>
      
        <DialogContent sx={{backgroundColor:'#e94e1b'}} >
          <AdminCustomerForm onClose={onClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default AddCustomerModal;
  