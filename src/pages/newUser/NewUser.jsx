import "./newUser.css";

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='John' />
        </div>
        <div className='newUserItem'>
          <label>Full name</label>
          <input type='text' placeholder='John Snow' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='Johnsnow@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='number' placeholder='81 743 9255' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='Gauteng | SA' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='male'>Female</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserBtn'>Create</button>
      </form>
    </div>
  );
};

export default NewUser;
