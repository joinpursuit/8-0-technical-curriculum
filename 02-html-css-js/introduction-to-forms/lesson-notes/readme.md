# Introduction to Forms

## Learning Objectives

By the end of this lesson you should be able to:

- Build forms with the form tag, using generic inputs and a submit button.
- Write valid HTML by including necessary input attributes.
- Associate labels with inputs via the `for` tag or through nesting.
- Modify inputs by changing the `type` attribute.
- Create dropdowns, radio buttons, text areas, and check boxes in forms.
- Require fields to be completed on submit with the `required` keyword.

---

- To create an HTML file, what file extension should you use? Create one now.

- What element allows you to create a new form?

- How can you write a text input where a user can write their name?

  Do so on your page now.

- The `input` element should include a `type` attribute. What are some options for this attribute's value?

- What is the effect of changing the input's `type` attribute?

- The `input` element should also include both an `id` and a `name` attribute. What is the purpose of each of these attributes?

- Take a look at the following HTML. Do you see any issue with how the `label` elements are connected to the form fields?

  ```html
  <form>
    <label for="first">Preferred Name</label>
    <input id="preferred" name="first" type="text" />

    <label for="last">Surname</label>
    <input id="surname" name="last" type="text" />
  </form>
  ```

- Is the following valid HTML?

  ```html
  <form>
    <label>
      <input id="preferred" name="first" type="text" />
      Preferred Name
    </label>

    <label>
      <input id="surname" name="last" type="text" />
      Surname
    </label>
  </form>
  ```

- Dropdowns require two elements: the `select` element and the `option` element.

  ```html
  <form>
    <select>
      <option>-- Choose an Honorific --</option>
      <option value="mr">Mr.</option>
      <option value="mrs">Mrs.</option>
      <option value="ms">Ms.</option>
      <option value="mx">Mx.</option>
      <option value="none">None</option>
    </select>
  </form>
  ```

  Which of the above options will be displayed on the page when it loads, by default?

- Radio buttons can be created with an `input` element. In the code below, there are three different radio buttons. However, it is possible to click on all three radio buttons when you should only be able to click on one.

  How can you group together radio buttons so that only one option can be selected?

  ```html
  <form>
    <label>
      <input type="radio" />
      Mr.
    </label>
    <label>
      <input type="radio" />
      Mrs.
    </label>
    <label>
      <input type="radio" />
      Mx.
    </label>
  </form>
  ```

- How can you create a checkbox in a form?

- How can you create a checkbox that is, by default, checked?

- What happens when you hit the submit button on a form?

- How can you make an input field required?

- How does adding specific requirements to input fields affect the submit functionality?
