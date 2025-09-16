import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
}

const ContactDialog: React.FC<ContactDialogProps> = ({ open, setOpen }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange =
    (key: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) return;
        try {
          setSending(true);
          await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            { from_name: form.name, message: form.message, reply_to: form.email },
            { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY! }
          );
          setOpen(false);
          setForm({ name: "", email: "", message: "" });
        } finally {
          setSending(false);
        }
      };

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
            onClick={handleSubmit}
            disabled={sending || !form.name || !form.email || !form.message}
            variant="contained"
            sx={{ bgcolor: Accent, "&:hover": { bgcolor: Accent2 } }}
        >
            {sending ? "Sending…" : "Send"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
