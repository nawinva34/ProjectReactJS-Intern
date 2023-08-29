import { Form, Input, Row, Col, Button, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../style/AntdCustom.css";

const FormAddress = (props) => {
  const [form] = Form.useForm();
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sub_districts, setSubDistrict] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [region_citizen, setRegionCitizen] = useState({
    country: "",
    province: "",
    district: "",
    subdistricts: "",
    zip: "",
  });

  const [region_current, setRegionCurrent] = useState({
    country: "",
    province: "",
    district: "",
    subdistricts: "",
    zip: "",
  });

  console.log("ss",region_citizen)
  
  const handleCopyAddress = () => {
    setRegionCurrent({
      country: region_citizen?.country,
      province: region_citizen?.province,
      district: region_citizen?.district,
      subdistricts: region_citizen?.subdistricts,
      zip: region_citizen?.zip
    });
    // setRegionCurrent({
    //   country: form.getFieldValue()?.region_country_id1,
    //   province: form.getFieldValue()?.region_district_id1,
    //   district: form.getFieldValue()?.region_province_id1,
    //   subdistricts: form.getFieldValue()?.region_subdistrict_id1,
    //   zip: form.getFieldValue()?.region_zipcode1
    // });
  }

  console.log("copy",region_current)

  // console.log("zip", zipCode);
  // console.log("props", zip_code)
  // console.log("form",props.form)
  console.log("StateObject", region_citizen);

  useEffect(() => {
    axios
      .get("http://192.168.10.113:20001/api/v1/regions/countries")
      .then((response) => {
        setCountries(response.data.data.countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCountryChange = (value) => {
    setRegionCitizen({ ...region_citizen, country: value });
    if (value === "Thailand") {
      axios
        .get("http://192.168.10.113:20001/api/v1/regions/provinces")
        .then((response) => {
          setProvinces(response.data.data.provinces);
          form.setFieldsValue({ [props.country] : value});
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setProvinces([]);
    }
  };

  const handleProvinces = (value, id) => {
    setRegionCitizen({ ...region_citizen, province: value });
    console.log("value", value);
    const idProvinces = id.key;
    axios(
      `http://192.168.10.113:20001/api/v1/regions/district/${idProvinces}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        setDistricts(response.data.data.districts);
        form.setFieldsValue({ [props.province] : value});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDistricts = (value, id) => {
    setRegionCitizen({ ...region_citizen, district: value });
    const idProvinces = id.key;
    axios(
      `http://192.168.10.113:20001/api/v1/regions/sub-district/${idProvinces}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        setSubDistrict(response.data.data.sub_districts);
        form.setFieldsValue({ [props.district] : value});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSupDistricts = (response, value) => {
    console.log("District", response, value.key);
    const selectedDistrictId = value.key;
    const matchingSubDistricts = [];
    sub_districts.forEach((subDistrict) => {
      console.log("ss", subDistrict.id, selectedDistrictId);
      if (subDistrict.id.toString() === selectedDistrictId) {
        matchingSubDistricts.push(subDistrict);
      }
    });
    const zip_codeValue = matchingSubDistricts[0]?.zipcode ?? "";
    setRegionCitizen({ ...region_citizen, subdistricts: response, zip: zip_codeValue });
    setZipCode(zip_codeValue);
    console.log("new_zip", zip_codeValue);
    form.setFields([
      { name: props.subdistrict, value: response },
      { name: props.zip_code, value: zip_codeValue }
    ]);
    console.log("form",form.getFieldValue())
  };

  return (
    <>
      <div className="p-2">
        <div className="flex">
          <p className="text-lg text-[#0066FF] mb-2">{props.title}</p>
          {props.button && (
            <Button
              type="link"
              className="text-[#0B8BEA] transform -translate-y-[2px]"
              onClick={handleCopyAddress}
            >
              <u>คัดลอกจากที่อยู่ตามบัตรประชาชน/ ที่อยู่ที่ลงทะเบียน</u>
            </Button>
          )}
        </div>
        <Row gutter={[32]}>
          <Col span={24}>
            <Form.Item label="ที่อยู่ (ภาษาไทย)" name={props.address_th}>
              <Input
                placeholder="12/34 หมู่บ้านสุขใจ ซอย 11"
                className="h-[38px]"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="ที่อยู่ (ภาษาอังกฤษ)" name={props.address_en}>
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ประเทศ" className="h-[38px]" name={props.country}>
              <Select onChange={handleCountryChange}>
                {countries.map((country) => (
                  <Select.Option key={country.id} value={country.name}>
                    {country.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="จังหวัด"
              className="h-[38px]"
              name={props.province}
            >
              <Select onChange={handleProvinces} disabled={!region_citizen.country || region_citizen.country !== "Thailand"}>
                {provinces.map((province) => (
                  <Select.Option key={province.id} value={province.name_th}>
                    {province.name_th}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} className="mt-7">
            <Form.Item
              label="อำเภอ"
              className=" h-[38px]"
              name={props.district}
            >
              <Select onChange={handleDistricts} disabled={!region_citizen.province}>
                {districts.map((district) => (
                  <Select.Option key={district.id} value={district.name_th}>
                    {district.name_th}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} className="mt-7">
            <Form.Item
              label="ตำบล"
              className=" h-[38px]"
              name={props.subdistrict}
            >
              <Select onChange={handleSupDistricts} disabled={!region_citizen.district}>
                {sub_districts.map((sub_district) => (
                  <Select.Option
                    key={sub_district.id}
                    value={sub_district.name_th}
                  >
                    {sub_district.name_th}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12} className="mt-7">
            <Form.Item label="รหัสไปรษณีย์">
              <Input
                className=" h-[38px]"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                disabled={!region_citizen.subdistricts}
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormAddress;