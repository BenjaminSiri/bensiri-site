import React, { useState } from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Accent, Accent2, Dark, Light } from "../globalStyles";

const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

// Dark-mode styling for MUI TextField internals
const StyledTextField = styled(TextField)`
  && {
    width: 100%;
  }
  && .MuiInputBase-input {
    color: ${Light};
  }
  && .MuiInputLabel-root {
    color: ${Light};
  }
  && .MuiOutlinedInput-notchedOutline {
    border-color: ${Light}55;
  }
  && .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${Accent};
  }
  && label.Mui-focused {
    color: ${Accent};
  }

`;

interface ContactDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSend?: (data: { name: string; email: string; message: string }) => Promise<void> | void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ open, setOpen, onSend }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange =
    (key: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"  // sizes the paper; no manual widths needed
    >
      <DialogTitle sx={{ bgcolor: Dark, color: Light }}>Send an Email</DialogTitle>

      <DialogContent sx={{ bgcolor: Dark, overflowX: "hidden" }}>
        <DialogBody>
          <StyledTextField
            variant="outlined"
            label="Name"
            value={form.name}
            onChange={handleChange("name")}
            fullWidth
            margin="dense"
            required
          />
          <StyledTextField
            variant="outlined"
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            fullWidth
            margin="dense"
            required
          />
          <StyledTextField
            variant="outlined"
            label="Message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange("message")}
            fullWidth
            margin="dense"
            required
          />
        </DialogBody>
      </DialogContent>

      <DialogActions sx={{ bgcolor: Dark }}>
        <Button onClick={() => setOpen(false)} sx={{ color: Light }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: Accent, "&:hover": { bgcolor: Accent2 } }}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
