import { React, useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

function AddressSelectionComponent() {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [open, setOpen] = useState(false);

  const [hisaddress, setHisAddress] = useState(() => {
    const storedAddresses = localStorage.getItem("hisaddress");
    return storedAddresses
      ? JSON.parse(storedAddresses)
      : [
          {
            id: 0,
            addressTitle: "2118 Thornridge Cir",
            address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            phone: "(209) 555-0104",
            type: "Home",
          },
          {
            id: 1,
            addressTitle: "1234 Elm St",
            address: "1234 Elm St. Springfield, Illinois 62704",
            phone: "(217) 555-0123",
            type: "Work",
          },
        ];
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const newAddress = {
      id: hisaddress.length,
      addressTitle: formJson.addressTitle || "New Address",
      address: formJson.address,
      phone: formJson.phone || "N/A",
      type: formJson.type || "Other",
    };

    // Update state and save to localStorage
    const updatedAddresses = [...hisaddress, newAddress];
    setHisAddress(updatedAddresses);
    localStorage.setItem("hisaddress", JSON.stringify(updatedAddresses));
    handleClose();
  };

  return (
    <div className="flex flex-col space-y-3 items-center justify-center">
      {hisaddress.map((address, id) => (
        <div
          key={address.id}
          className="bg-gray-100 rounded-xl h-40 w-[70%] flex items-center"
        >
          <div className="p-4" onClick={() => setSelectedAddress(id)}>
            {selectedAddress === id ? (
              <RadioButtonCheckedIcon
                fontSize="large"
                className="m-3 cursor-pointer"
              />
            ) : (
              <RadioButtonUncheckedIcon
                fontSize="large"
                className="m-3 cursor-pointer"
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-5 mt-8">
              <h2 className="text-lg font-bold">{address.addressTitle}</h2>
              <p className="text-white bg-black rounded px-2 py-1">
                {address.type}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-gray-600 mt-5">{address.address}</p>
              <p className="text-gray-600 mt-2">{address.phone}</p>
            </div>
          </div>
          <div className="ml-auto m-4 space-x-3">
            <EditIcon className="hover:text-blue-500 cursor-pointer" />
            <ClearIcon className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      ))}
      <div className="relative w-[70%] mx-auto">
        <div
          className="border-2 border-dashed"
          style={{
            borderImage:
              "linear-gradient(to right, rgba(209,213,219,0) 0%, rgba(209,213,219,1) 50%, rgba(209,213,219,0) 100%) 1",
          }}
        />
        <AddCircleIcon
          onClick={handleOpen}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 cursor-pointer"
        />
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: handleSubmit,
          },
        }}
      >
        <DialogTitle>Add New Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the details for the new address.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="addressTitle"
            name="addressTitle"
            label="Address Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="address"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="type"
            name="type"
            label="Type (e.g., Home, Work)"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddressSelectionComponent;
