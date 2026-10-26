import BasicExample from "./components/01_Basic-Example"
import MultipleFields from "./components/02_multiple-fields"
import ExampleWithParse from "./components/03_example-with-parse"
import CustomValidation from "./components/04_custom-validation-with-refine"
import TransformData from "./components/05_tranform-data"

function App() {

  return (
    <>
      <h1>Zod Validation</h1>
      <BasicExample />
      <MultipleFields />
      <ExampleWithParse />
      <CustomValidation />
      <TransformData />
    </>
  )
}

export default App
