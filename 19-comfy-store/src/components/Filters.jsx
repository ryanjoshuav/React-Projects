import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";
import FormRange from "./FormRange.jsx";
import FormCheckBox from "./FormCheckBox.jsx";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { categories, companies } = meta;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
        size="input-sm"
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* Companies */}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* Categories */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* Price */}
      <FormRange
        label="select price"
        name="price"
        price={price}
        size="range-sm"
      />
      {/* Shipping */}
      <FormCheckBox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
        size="checkbox-sm"
      />

      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};
export default Filters;
