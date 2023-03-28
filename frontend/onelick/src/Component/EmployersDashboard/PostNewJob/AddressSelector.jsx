import React, { useState } from 'react'
import 'react-select2-wrapper/css/select2.css';
import Select from 'react-select';

const AddressSelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const countryOptions = [{ value: 'india', label: 'India' }, { value: 'usa', label: 'USA' }, { value: 'canada', label: 'Canada' }];

    const stateOptions = {
        india: [
            { value: 'ap', label: 'Andhra Pradesh' },
            { value: 'mp', label: 'Madhya Pradesh' },
            { value: 'tn', label: 'Tamil Nadu' }
        ],
        usa: [
            { value: 'ca', label: 'California' },
            { value: 'ny', label: 'New York' },
            { value: 'tx', label: 'Texas' }
        ],
        canada: [
            { value: 'ab', label: 'Alberta' },
            { value: 'on', label: 'Ontario' },
            { value: 'qc', label: 'Quebec' }
        ]
    };

    const cityOptions = {
        ap: [
            { value: 'hyd', label: 'Hyderabad', state: 'ap' },
            { value: 'viz', label: 'Vizag', state: 'ap' },
            { value: 'tir', label: 'Tirupati', state: 'ap' }
        ],
        mp: [
            { value: 'bpl', label: 'Bhopal', state: 'mp' },
            { value: 'ind', label: 'Indore', state: 'mp' },
            { value: 'jab', label: 'Jabalpur', state: 'mp' }
        ],
        tn: [
            { value: 'chn', label: 'Chennai', state: 'tn' },
            { value: 'coi', label: 'Coimbatore', state: 'tn' },
            { value: 'mdu', label: 'Madurai', state: 'tn' }
        ],
        ca: [
            { value: 'la', label: 'Los Angeles', state: 'ca' },
            { value: 'sf', label: 'San Francisco', state: 'ca' },
            { value: 'sd', label: 'San Diego', state: 'ca' }
        ],
        ny: [
            { value: 'nyc', label: 'New York City', state: 'ny' },
            { value: 'buf', label: 'Buffalo', state: 'ny' },
            { value: 'roc', label: 'Rochester', state: 'ny' }
        ],
        tx: [
            { value: 'hou', label: 'Houston', state: 'tx' },
            { value: 'dal', label: 'Dallas', state: 'tx' },
            { value: 'aus', label: 'Austin', state: 'tx' }
        ],
        ab: [
            { value: 'edm', label: 'Edmonton', state: 'ab' },
            { value: 'cal', label: 'Calgary', state: 'ab' },
            { value: 'red', label: 'Red Deer', state: 'ab' }
        ],
        on: [
            { value: 'tor', label: 'Toronto', state: 'on' },
            { value: 'ott', label: 'Ottawa', state: 'on' },
            { value: 'ham', label: 'Hamilton', state: 'on' }
        ],
        qc: [
            { value: 'mtl', label: 'Quebec City', state: 'qc' },
            { value: 'tro', label: 'Trois-Rivieres', state: 'qc' }
        ]
    };


    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedState(null);
        setSelectedCity(null);
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        setSelectedCity(null);
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    const stateOptionsByCountry = selectedCountry
        ? stateOptions[selectedCountry.value]
        : [];

    const cityOptionsByState = selectedState
        ? cityOptions[selectedState.value]
            .filter((option) => option.state === selectedState.value)
        : [];

    return (
        <>
            <div className="data_row2">
                <div className="left">
                    <label htmlFor="country">Country</label>
                    <Select
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        options={countryOptions}
                        placeholder="Select Country"
                    />
                </div>
                <div className="right">
                    <label htmlFor="state">State</label>
                    <Select
                        value={selectedState}
                        onChange={handleStateChange}
                        options={stateOptionsByCountry}
                        placeholder="Select State"
                    />
                </div>
            </div>
            <div className="data_row3">
                <label htmlFor="city">City</label>
                <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    options={cityOptionsByState}
                    placeholder="Select City"
                />
            </div>

            <div className="data_row3">
                <label htmlFor="address">Complete Address</label>
                <textarea name="" id="address" placeholder='RNT Hostel Indore' />
            </div>

        </>
    )
}

export default AddressSelector
