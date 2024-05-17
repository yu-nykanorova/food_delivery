import React, { useState } from 'react';

export const Account = ({ setTitle }) => {
  React.useEffect(() => {
    setTitle("Account");
  }, [setTitle]);
  return (
    <div className="account">
      <div className="account__title">Personal information</div>
      <div className="account__avatar">
        <p className="account__avatar-title">Avatar</p>
        <div className="account__avatar-data">
          <img src="/src/assets/img/avatar.png" alt="avatar" />
          <div id="change">Change</div>
          <div id="remove">Remove</div>
        </div>
      </div>
      <div className="account__name-data">
        <div className="account__first-name">
          <label for="firstname">First name</label><input type="text" id="firstname" placeholder="Jane"/>
        </div>
        <div className="account__last-name">
          <label for="firstname">Last name</label><input type="text" id="lastname" placeholder="Robertson"/>
        </div>
      </div>
      <div className="account__contact-data">
        <div className="account__email">
          <label for="email">Email</label><input type="email" id="email" placeholder="jane.robertson@example.com"/>
        </div>
        <div className="account__phone">
          <label for="phone">Phone number</label><input type="tel" id="lastname" placeholder="(217) 555-0113"/>
        </div>
      </div>
      <div className="account__notifications-title">Email notifications</div>
      <div className="account__notifications-list">
        <div className="notifications-list-left"></div>
        <div className="notifications-list-right"></div>
      </div>
      <div className="account__buttons">
        <button className="btn logout-btn">Log out</button>
        <div className="changes-btn">
          <button className="btn discard-changes">Discard changes</button>
          <button className="btn save-changes">Save changes</button>
        </div>
      </div>
    </div>
  )
}
