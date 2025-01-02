export function downloadContent(content: string, fileName?: string, options?: FilePropertyBag) {
    const file = new File([content], fileName || 'download.txt', options);
    const url = window.URL.createObjectURL(file);
    const a = document.createElement('a');

    a.href = url;
    a.download = file.name;

    document.body.append(a);
    a.click();
    a.remove();
}

export function openInNewTab(content: string, fileName?: string, options?: FilePropertyBag) {
    const file = new File([content], fileName || 'download.txt', options);
    const url = window.URL.createObjectURL(file);
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';

    document.body.append(a);
    a.click();
    a.remove();
}