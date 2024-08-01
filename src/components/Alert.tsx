
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../store/store';
import { change } from '../store/slices/alert-slice';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

interface IAlertProps {
  title: string;
  message: string;
  buttonName: string;
  confirmFunc?: () => void;
  cancelButtonName?: string;
  confirmButtonName?: string;
}

export function Alert({ title, message, buttonName, confirmFunc, cancelButtonName = 'Cancelar', confirmButtonName = 'Confirmar' }: IAlertProps) {

  const dispatch = useAppDispatch();
  const isAlert = useAppSelector((state) => state.alert.isAlert);
  const handleOpen = () => dispatch(change());
  const handleClose = () => dispatch(change());

  return (
    <div>
      <Button onClick={handleOpen}>{buttonName}</Button>

      <Modal
        open={isAlert}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" >{title}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='body1'>{message}</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 5 }}>
            <Button color='error' onClick={handleClose}>{cancelButtonName}</Button>
            <Button onClick={confirmFunc}>{confirmButtonName}</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
