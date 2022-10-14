import { FormButton, InputControl } from './FormControl';

export default function MemeForm() {
  return (
    <div>
      <div>
        <form>
          <h1>Make-a-meme</h1>
          <InputControl
            label="Upload Image URL"
            type="text"
          >
          </InputControl>

          <FormButton>Upload</FormButton>
        </form>
      </div>
      <div>
        
      </div>
    </div>
  );
}
