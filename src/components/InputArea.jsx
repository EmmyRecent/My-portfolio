import Button from "./Button";

const InputArea = () => {
  return (
    <div className="mt-7 space-y-3">
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <input type="text" placeholder="First name" name="fName" />
        <input type="text" placeholder="Last name" name="lName" />
      </div>

      <div className="flex flex-col items-center gap-3 md:flex-row">
        <input type="email" placeholder="Email address" name="email" />
        <input type="text" placeholder="Phone number" name="phone" />
      </div>

      <div>
        <textarea name="message" rows={5} placeholder="Message"></textarea>
        <div className="mt-8">
          <Button label="Send Message" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default InputArea;
