import ComboBox from "./_combobox";
import ReactCountryFlag from 'react-country-flag';
import { countries as countryData } from 'countries-list';

const ComboBoxDemo = () => {
  const countryOptions = Object.entries(countryData).map(([code, country]) => ({
    value: code,
    label: country.name,
    icon: (
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{ width: '24px', height: '17px', borderRadius: '3px', marginRight: '8px' }}
      />
    ),
  }));

  return (
    <div>
      <ComboBox options={countryOptions} />
    </div>
  );
};

export default ComboBoxDemo;
