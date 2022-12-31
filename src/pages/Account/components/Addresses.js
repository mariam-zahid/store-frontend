import React, { useEffect, useState } from "react";
import AddressForm from "../../../Components/AddressForm";
import Button from "../../../Components/UI/Button";
import Modal from "../../../Components/UI/Modal";
import {
  createNewAddress,
  deleteAddress,
  getMyAddresses,
  updateAddress,
  setDefaultAddress,
} from "../../../services/UserServices";
import "./styles.css";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // fetch addresses
    setLoading(true);
    getMyAddresses()
      .then((res) => {
        setAddresses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err in fetch address: ", err);
        setLoading(false);
      });
  }, []);
  const handleAddressDelete = (addressId) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address._id !== addressId)
    );
  };
  const handleSetDefault = (addressId) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) => {
        if (address._id === addressId) {
          return {
            ...address,
            defaultAddress: true,
          };
        }
        return {
          ...address,
          defaultAddress: false,
        };
      })
    );
  };
  return (
    <>
      <h3>Addresses</h3>
      {loading ? (
        <div>Loading...</div>
      ) : addresses.length ? (
        <div className="addressesWrapper">
          {addresses.map((address) => (
            <AddressCard
              key={address._id}
              address={address}
              onAddressDelete={handleAddressDelete}
              onSetDefault={handleSetDefault}
            />
          ))}
        </div>
      ) : (
        <>
          <div>No addresses found</div>
        </>
      )}
      <Button action={() => setShow(true)}>Add New Address</Button>
      <Modal
        title="Add Address"
        onClose={() => setShow(false)}
        show={show}
        onSubmit={() => {
          return new Promise((resolve, reject) => {
            createNewAddress({ body: { address: newAddress } })
              .then((res) => {
                setAddresses([...addresses, res.data]);
                resolve();
              })
              .catch((err) => {
                console.log("err in create address: ", err);
                reject();
              });
          });
        }}
      >
        <AddressForm
          onFieldsChange={(formValues) => {
            setNewAddress(formValues);
          }}
        />
      </Modal>
    </>
  );
};

export default Addresses;

const AddressCard = ({
  address: fetchedAddress,
  onAddressDelete,
  onSetDefault,
}) => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [address, setAddress] = useState({});
  const [isDefault, setIsDefault] = useState(false);
  let addressFields;
  useEffect(() => {
    setAddress(fetchedAddress.address);
    setIsDefault(fetchedAddress.defaultAddress);
  }, [fetchedAddress]);
  const handleSetDefault = () => {
    // set default address
    setDefaultAddress({ pathParams: { addressId: fetchedAddress._id } }).then(
      (res) => {
        onSetDefault(fetchedAddress._id);
      }
    );
  };
  return (
    <div className="addressCardWrapper">
      <div className="addressCard">
        <div>
          <div className="addressName">
            {address.firstName} {address.lastName}
          </div>
          <div className="addressLine">{address.addressLine1}</div>
          <div className="addressCity">
            {address.city}, {address.state} {address.pinCode}
          </div>
          <div className="addressCountry">{address.country}</div>
          <div className="addressPhone">Phone number: {address.phone}</div>
          <div className="addressEmail">Email: {address.email}</div>
        </div>
        <div className="addressActions">
          <div
            onClick={() => {
              setShow(true);
            }}
          >
            Edit
          </div>{" "}
          |{" "}
          <div
            onClick={() => {
              setShowDelete(true);
            }}
          >
            Delete
          </div>
          {isDefault ? null : (
            <>
              |{" "}
              <div
                onClick={() => {
                  handleSetDefault();
                }}
              >
                Set as default
              </div>
            </>
          )}
        </div>
        <Modal
          title="Delete Address"
          onClose={() => setShowDelete(false)}
          show={showDelete}
          submitText="Confirm"
          onSubmit={() => {
            return new Promise((resolve, reject) => {
              deleteAddress({
                pathParams: { addressId: fetchedAddress._id },
              })
                .then(() => {
                  onAddressDelete(fetchedAddress._id);
                  resolve();
                })
                .catch((err) => {
                  console.log("err in delete address: ", err);
                  reject();
                });
            });
          }}
        >
          Are you sure you want to delete this address?
        </Modal>
        <Modal
          title="Update Address"
          onClose={() => setShow(false)}
          show={show}
          onSubmit={() => {
            return new Promise((resolve, reject) => {
              // createNewAddress({ body: { address: newAddress } })
              // console.log("addressFields: ", addressFields);
              updateAddress({
                body: { address: addressFields },
                pathParams: { addressId: fetchedAddress._id },
              })
                .then((res) => {
                  setAddress(res.data.address);
                  resolve();
                })
                .catch((err) => {
                  console.log("err in update address: ", err);
                  reject();
                });
            });
          }}
        >
          <AddressForm
            address={address}
            onFieldsChange={(formValues) => {
              addressFields = formValues;
              // setAddress(formValues);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};
