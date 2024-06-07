import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../../../../shared/ui/Checkbox/Checkbox';

export const Account = ({ setTitle, setLoggedIn }) => {
  useEffect(() => {
    setTitle("Account");
  }, [setTitle]);
  const [avatar, setAvatar] = useState("/src/assets/img/avatar.png");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveAvatar = () => {
    setAvatar("");
  };
  const handleLogout = (event) => {
    event.preventDefault();
    setLoggedIn(false);
  };
  
  return (
    <div className="account">
      <div className="account__title">Personal information</div>
      <div className="account__avatar">
        <p className="account__avatar-title">Avatar</p>
        <div className="account__avatar-data">
          <img src={avatar || "/src/assets/img/avatar-default.svg"} alt="avatar" />
          <div id="change" onClick={() => document.getElementById("avatarInput").click()}>Change</div>
          <div id="remove" onClick={handleRemoveAvatar}>Remove</div>
          <input type="file" id="avatarInput" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>
      <div className="account__name-data">
        <div className="account__first-name">
          <label htmlFor="firstname">First name</label><input type="text" id="firstname" placeholder="Jane"/>
        </div>
        <div className="account__last-name">
          <label htmlFor="firstname">Last name</label><input type="text" id="lastname" placeholder="Robertson"/>
        </div>
      </div>
      <div className="account__contact-data">
        <div className="account__email">
          <label htmlFor="email">Email</label><input type="email" id="email" placeholder="jane.robertson@example.com"/>
        </div>
        <div className="account__phone">
          <label htmlFor="phone">Phone number</label><input type="tel" id="lastname" placeholder="(217) 555-0113"/>
        </div>
      </div>
      <div className="account__notifications-title">Email notifications</div>
      <div className="account__notifications-list">
        <div className="notifications-list-left">
          <Checkbox defaultChecked={true} label="New deals" idValue="1" />
          <Checkbox defaultChecked={true} label="New restaurants" idValue="2" />
          <Checkbox defaultChecked={true} label="Order statuses" idValue="3" />
        </div>
        <div className="notifications-list-right">
          <Checkbox defaultChecked={true} label="Password changes" idValue="4" />
          <Checkbox defaultChecked={true} label="Special offers" idValue="5" />
          <Checkbox defaultChecked={true} label="Newsletter" idValue="6" />
        </div>
      </div>
      <div className="account__buttons">
        <button className="btn logout-btn" onClick={handleLogout}>Log out</button>
        <div className="changes-btn">
          <button className="btn discard-changes">Discard changes</button>
          <button className="btn save-changes">Save changes</button>
        </div>
      </div>
    </div>
  )
};

Account.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
