/**
 * Object Intersection
 */
type PrimitiveInterSection = string & number; // never

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

// 양쪽 타입의 프로퍼티 모두 있어야 된다.
const Jisoo: PersonAndCompany = {
  name: "지수",
  age: 20,
  company: "YG",
  companyRegistrationNumber: "010-123-123",
};

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);
