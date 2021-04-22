export function phone(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})/,'($1) ');
    e.currentTarget.value = value;
    return e;
}
