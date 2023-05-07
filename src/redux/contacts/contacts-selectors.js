export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts = [], filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};
