/* ============ words in 3 languages ============ */
const WORDS = {
  en: {
    appName: "Smart-Desk", welcomeTitle: "Welcome! Let's set up your desk", welcomeSub: "Tell us about your place. This takes 20 seconds and stays only on your device.",
    bizName: "Your shop / school / business name", ownerName: "Your name", whatKind: "What do you run?", kindShop: "Shop", kindSchool: "School", kindOther: "Other", startNow: "Start using",
    menuHome: "Home", menuPeople: "People", menuBook: "Money Book", menuShare: "Share & Print", menuSettings: "Settings",
    people_shop: "Customers", people_school: "Students", people_other: "Clients",
    one_shop: "Customer", one_school: "Student", one_other: "Client",
    due_shop: "Credit sale (Udhaar)", due_school: "Fee due", due_other: "Amount due",
    paid_shop: "Payment received", paid_school: "Fee received", paid_other: "Payment received",
    hello: "Hello", helloSub: "Here is how things look today.",
    totalPending: "Total pending", totalReceived: "Total received", headCount: "People added", todayEntries: "Entries today",
    last7: "Last 7 days", topPending: "Highest pending", addPerson: "Add", addEntry: "New entry", quickEntry: "Add entry",
    name: "Name", phone: "Phone (optional)", note: "Note (optional)", amount: "Amount", date: "Date", save: "Save", cancel: "Cancel", close: "Close",
    search: "Search by name or phone", all: "All", pending: "Pending", clear: "Clear", nothing: "Nothing here yet",
    pickPerson: "Choose person", delete: "Delete", sureDelete: "Delete this? It cannot be undone.", balance: "Balance", history: "History",
    exportExcel: "Excel file", exportExcelHint: "Opens in Excel, with every entry", exportSheets: "Google Sheets", exportSheetsHint: "Copies data, then paste in a new sheet", printIt: "Print", printHint: "Clean page for paper or PDF",
    copiedSheets: "Copied! Paste it in the new sheet (Ctrl+V)", fileSaved: "File downloaded",
    backup: "Backup data", backupHint: "Download all your data as one file", restore: "Restore backup", restoreHint: "Load a backup file you saved before", restored: "Backup restored",
    look: "Look", lookHint: "Switch between light and dark", language: "Language", languageHint: "Pick the language you are comfortable with",
    shopDetails: "Business details", shopDetailsHint: "Change name or type", wipe: "Erase everything", wipeHint: "Deletes all data from this device", wiped: "All data erased",
    online: "Online", offline: "Offline", offlineNote: "Working offline, everything is safe on this device",
    tipHomeTitle: "Tip", tipHome: "Tap 'Add entry' every time you give credit or take money. The totals update by themselves.",
    tipPeople: "Tap any person to see their full history and add entries quickly.",
    tipBook: "Every entry lives here. Tap the pencil to fix a wrong amount or name.",
    tipShare: "Use these buttons to send your data to Excel, Google Sheets or paper.",
    gotIt: "Got it", next: "Next", skip: "Skip", finish: "Finish", step: "Step",
    t1h: "Add your people", t1: "Start in 'People' and add your customers or students.", t2h: "Add entries", t2: "Use the big 'Add entry' button to write credit given or money received.",
    t3h: "Share your data", t3: "In 'Share & Print' you can get Excel, Google Sheets or a printed copy.", t4h: "Dark mode & language", t4: "Open 'Settings' to change look, language and to take a backup.",
    savedOnDevice: "Saved on this device", dataFor: "Report for", generated: "Generated on", total: "Total", type: "Type", editDetails: "Edit details", youAre: "You are using",
    emptyHint: "Add your first person to begin",
    edit: "Edit", editEntry: "Edit entry", calculator: "Calculator", useAmount: "Use this amount", addAsEntry: "Add as entry", updated: "Changes saved", madeBy: "Created by", rights: "All rights reserved.",
    t5h: "Quick calculator", t5: "Tap the calculator icon to add up bills fast. Inside an entry, use the calculator button next to Amount."
  },
  hi: {
    appName: "खाता डेस्क", welcomeTitle: "स्वागत है! अपना डेस्क तैयार करें", welcomeSub: "अपनी जगह के बारे में बताइए। सिर्फ 20 सेकंड लगेंगे और डेटा आपके डिवाइस पर ही रहेगा।",
    bizName: "दुकान / स्कूल / बिज़नेस का नाम", ownerName: "आपका नाम", whatKind: "आप क्या चलाते हैं?", kindShop: "दुकान", kindSchool: "स्कूल", kindOther: "अन्य", startNow: "शुरू करें",
    menuHome: "होम", menuPeople: "लोग", menuBook: "पैसों की बही", menuShare: "शेयर और प्रिंट", menuSettings: "सेटिंग",
    people_shop: "ग्राहक", people_school: "विद्यार्थी", people_other: "क्लाइंट",
    one_shop: "ग्राहक", one_school: "विद्यार्थी", one_other: "क्लाइंट",
    due_shop: "उधार बिक्री", due_school: "फीस बाकी", due_other: "बाकी रकम",
    paid_shop: "पैसे मिले", paid_school: "फीस मिली", paid_other: "पैसे मिले",
    hello: "नमस्ते", helloSub: "आज का हाल यह है।",
    totalPending: "कुल बाकी", totalReceived: "कुल मिला", headCount: "जुड़े हुए लोग", todayEntries: "आज की एंट्री",
    last7: "पिछले 7 दिन", topPending: "सबसे ज़्यादा बाकी", addPerson: "जोड़ें", addEntry: "नई एंट्री", quickEntry: "एंट्री जोड़ें",
    name: "नाम", phone: "फोन (वैकल्पिक)", note: "नोट (वैकल्पिक)", amount: "रकम", date: "तारीख", save: "सेव करें", cancel: "रद्द करें", close: "बंद करें",
    search: "नाम या फोन से खोजें", all: "सभी", pending: "बाकी", clear: "चुकता", nothing: "अभी यहाँ कुछ नहीं है",
    pickPerson: "व्यक्ति चुनें", delete: "हटाएँ", sureDelete: "इसे हटाएँ? यह वापस नहीं आएगा।", balance: "बाकी हिसाब", history: "इतिहास",
    exportExcel: "एक्सेल फाइल", exportExcelHint: "एक्सेल में खुलेगी, हर एंट्री के साथ", exportSheets: "गूगल शीट्स", exportSheetsHint: "डेटा कॉपी होगा, नई शीट में पेस्ट करें", printIt: "प्रिंट", printHint: "कागज़ या PDF के लिए साफ पेज",
    copiedSheets: "कॉपी हो गया! नई शीट में पेस्ट करें (Ctrl+V)", fileSaved: "फाइल डाउनलोड हो गई",
    backup: "डेटा बैकअप", backupHint: "अपना पूरा डेटा एक फाइल में डाउनलोड करें", restore: "बैकअप वापस लाएँ", restoreHint: "पहले सेव की हुई बैकअप फाइल चुनें", restored: "बैकअप वापस आ गया",
    look: "रंग रूप", lookHint: "लाइट और डार्क मोड बदलें", language: "भाषा", languageHint: "अपनी पसंद की भाषा चुनें",
    shopDetails: "बिज़नेस की जानकारी", shopDetailsHint: "नाम या प्रकार बदलें", wipe: "सब कुछ मिटाएँ", wipeHint: "इस डिवाइस से पूरा डेटा हट जाएगा", wiped: "पूरा डेटा मिट गया",
    online: "ऑनलाइन", offline: "ऑफलाइन", offlineNote: "ऑफलाइन चल रहा है, सब कुछ इस डिवाइस पर सुरक्षित है",
    tipHomeTitle: "सुझाव", tipHome: "जब भी उधार दें या पैसे लें, 'एंट्री जोड़ें' दबाएँ। टोटल अपने आप बदल जाएगा।",
    tipPeople: "किसी भी व्यक्ति पर टैप करें, उसका पूरा हिसाब दिखेगा और जल्दी एंट्री भी जोड़ सकते हैं।",
    tipBook: "हर एंट्री यहीं रहती है। गलत रकम या नाम ठीक करने के लिए पेंसिल दबाएँ।",
    tipShare: "इन बटनों से डेटा एक्सेल, गूगल शीट्स या कागज़ पर ले जाएँ।",
    gotIt: "समझ गया", next: "आगे", skip: "छोड़ें", finish: "पूरा", step: "चरण",
    t1h: "लोगों को जोड़ें", t1: "'लोग' में जाकर अपने ग्राहक या विद्यार्थी जोड़ें।", t2h: "एंट्री लिखें", t2: "बड़े 'एंट्री जोड़ें' बटन से उधार या मिले हुए पैसे लिखें।",
    t3h: "डेटा शेयर करें", t3: "'शेयर और प्रिंट' में एक्सेल, गूगल शीट्स या प्रिंट मिलेगा।", t4h: "डार्क मोड और भाषा", t4: "'सेटिंग' में रंग रूप, भाषा और बैकअप मिलेगा।",
    savedOnDevice: "इस डिवाइस पर सेव है", dataFor: "रिपोर्ट", generated: "बनाई गई", total: "कुल", type: "प्रकार", editDetails: "जानकारी बदलें", youAre: "आप इस्तेमाल कर रहे हैं",
    emptyHint: "शुरू करने के लिए पहला व्यक्ति जोड़ें",
    edit: "बदलें", editEntry: "एंट्री बदलें", calculator: "कैलकुलेटर", useAmount: "यह रकम इस्तेमाल करें", addAsEntry: "एंट्री बनाएँ", updated: "बदलाव सेव हो गया", madeBy: "बनाया गया", rights: "सर्वाधिकार सुरक्षित।",
    t5h: "झटपट कैलकुलेटर", t5: "बिल जोड़ने के लिए कैलकुलेटर आइकन दबाएँ। एंट्री के अंदर रकम के पास वाला कैलकुलेटर बटन इस्तेमाल करें।"
  },
  pa: {
    appName: "ਖਾਤਾ ਡੈਸਕ", welcomeTitle: "ਜੀ ਆਇਆਂ ਨੂੰ! ਆਪਣਾ ਡੈਸਕ ਤਿਆਰ ਕਰੋ", welcomeSub: "ਆਪਣੀ ਥਾਂ ਬਾਰੇ ਦੱਸੋ। ਸਿਰਫ਼ 20 ਸਕਿੰਟ ਲੱਗਣਗੇ ਤੇ ਡਾਟਾ ਤੁਹਾਡੇ ਡਿਵਾਈਸ ਉੱਤੇ ਹੀ ਰਹੇਗਾ।",
    bizName: "ਦੁਕਾਨ / ਸਕੂਲ / ਕਾਰੋਬਾਰ ਦਾ ਨਾਂ", ownerName: "ਤੁਹਾਡਾ ਨਾਂ", whatKind: "ਤੁਸੀਂ ਕੀ ਚਲਾਉਂਦੇ ਹੋ?", kindShop: "ਦੁਕਾਨ", kindSchool: "ਸਕੂਲ", kindOther: "ਹੋਰ", startNow: "ਸ਼ੁਰੂ ਕਰੋ",
    menuHome: "ਹੋਮ", menuPeople: "ਲੋਕ", menuBook: "ਪੈਸਿਆਂ ਦੀ ਬਹੀ", menuShare: "ਸ਼ੇਅਰ ਤੇ ਪ੍ਰਿੰਟ", menuSettings: "ਸੈਟਿੰਗ",
    people_shop: "ਗਾਹਕ", people_school: "ਵਿਦਿਆਰਥੀ", people_other: "ਕਲਾਇੰਟ",
    one_shop: "ਗਾਹਕ", one_school: "ਵਿਦਿਆਰਥੀ", one_other: "ਕਲਾਇੰਟ",
    due_shop: "ਉਧਾਰ ਵਿਕਰੀ", due_school: "ਫੀਸ ਬਾਕੀ", due_other: "ਬਾਕੀ ਰਕਮ",
    paid_shop: "ਪੈਸੇ ਮਿਲੇ", paid_school: "ਫੀਸ ਮਿਲੀ", paid_other: "ਪੈਸੇ ਮਿਲੇ",
    hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", helloSub: "ਅੱਜ ਦਾ ਹਾਲ ਇਹ ਹੈ।",
    totalPending: "ਕੁੱਲ ਬਾਕੀ", totalReceived: "ਕੁੱਲ ਮਿਲਿਆ", headCount: "ਜੋੜੇ ਹੋਏ ਲੋਕ", todayEntries: "ਅੱਜ ਦੀਆਂ ਐਂਟਰੀਆਂ",
    last7: "ਪਿਛਲੇ 7 ਦਿਨ", topPending: "ਸਭ ਤੋਂ ਵੱਧ ਬਾਕੀ", addPerson: "ਜੋੜੋ", addEntry: "ਨਵੀਂ ਐਂਟਰੀ", quickEntry: "ਐਂਟਰੀ ਜੋੜੋ",
    name: "ਨਾਂ", phone: "ਫ਼ੋਨ (ਵਿਕਲਪਿਕ)", note: "ਨੋਟ (ਵਿਕਲਪਿਕ)", amount: "ਰਕਮ", date: "ਤਾਰੀਖ਼", save: "ਸੇਵ ਕਰੋ", cancel: "ਰੱਦ ਕਰੋ", close: "ਬੰਦ ਕਰੋ",
    search: "ਨਾਂ ਜਾਂ ਫ਼ੋਨ ਨਾਲ ਲੱਭੋ", all: "ਸਾਰੇ", pending: "ਬਾਕੀ", clear: "ਚੁਕਤਾ", nothing: "ਅਜੇ ਇੱਥੇ ਕੁਝ ਨਹੀਂ",
    pickPerson: "ਵਿਅਕਤੀ ਚੁਣੋ", delete: "ਹਟਾਓ", sureDelete: "ਇਹ ਹਟਾਉਣਾ ਹੈ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਆਵੇਗਾ।", balance: "ਬਾਕੀ ਹਿਸਾਬ", history: "ਇਤਿਹਾਸ",
    exportExcel: "ਐਕਸਲ ਫ਼ਾਈਲ", exportExcelHint: "ਐਕਸਲ ਵਿੱਚ ਖੁੱਲ੍ਹੇਗੀ, ਹਰ ਐਂਟਰੀ ਸਮੇਤ", exportSheets: "ਗੂਗਲ ਸ਼ੀਟਸ", exportSheetsHint: "ਡਾਟਾ ਕਾਪੀ ਹੋਵੇਗਾ, ਨਵੀਂ ਸ਼ੀਟ ਵਿੱਚ ਪੇਸਟ ਕਰੋ", printIt: "ਪ੍ਰਿੰਟ", printHint: "ਕਾਗਜ਼ ਜਾਂ PDF ਲਈ ਸਾਫ਼ ਪੰਨਾ",
    copiedSheets: "ਕਾਪੀ ਹੋ ਗਿਆ! ਨਵੀਂ ਸ਼ੀਟ ਵਿੱਚ ਪੇਸਟ ਕਰੋ (Ctrl+V)", fileSaved: "ਫ਼ਾਈਲ ਡਾਊਨਲੋਡ ਹੋ ਗਈ",
    backup: "ਡਾਟਾ ਬੈਕਅੱਪ", backupHint: "ਆਪਣਾ ਸਾਰਾ ਡਾਟਾ ਇੱਕ ਫ਼ਾਈਲ ਵਿੱਚ ਡਾਊਨਲੋਡ ਕਰੋ", restore: "ਬੈਕਅੱਪ ਵਾਪਸ ਲਿਆਓ", restoreHint: "ਪਹਿਲਾਂ ਸੇਵ ਕੀਤੀ ਬੈਕਅੱਪ ਫ਼ਾਈਲ ਚੁਣੋ", restored: "ਬੈਕਅੱਪ ਵਾਪਸ ਆ ਗਿਆ",
    look: "ਰੂਪ ਰੰਗ", lookHint: "ਲਾਈਟ ਤੇ ਡਾਰਕ ਮੋਡ ਬਦਲੋ", language: "ਭਾਸ਼ਾ", languageHint: "ਆਪਣੀ ਪਸੰਦ ਦੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    shopDetails: "ਕਾਰੋਬਾਰ ਦੀ ਜਾਣਕਾਰੀ", shopDetailsHint: "ਨਾਂ ਜਾਂ ਕਿਸਮ ਬਦਲੋ", wipe: "ਸਭ ਕੁਝ ਮਿਟਾਓ", wipeHint: "ਇਸ ਡਿਵਾਈਸ ਤੋਂ ਸਾਰਾ ਡਾਟਾ ਹਟ ਜਾਵੇਗਾ", wiped: "ਸਾਰਾ ਡਾਟਾ ਮਿਟ ਗਿਆ",
    online: "ਆਨਲਾਈਨ", offline: "ਆਫ਼ਲਾਈਨ", offlineNote: "ਆਫ਼ਲਾਈਨ ਚੱਲ ਰਿਹਾ ਹੈ, ਸਭ ਕੁਝ ਇਸ ਡਿਵਾਈਸ ਉੱਤੇ ਸੁਰੱਖਿਅਤ ਹੈ",
    tipHomeTitle: "ਸੁਝਾਅ", tipHome: "ਜਦੋਂ ਵੀ ਉਧਾਰ ਦਿਓ ਜਾਂ ਪੈਸੇ ਲਵੋ, 'ਐਂਟਰੀ ਜੋੜੋ' ਦਬਾਓ। ਟੋਟਲ ਆਪਣੇ ਆਪ ਬਦਲ ਜਾਵੇਗਾ।",
    tipPeople: "ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਉੱਤੇ ਟੈਪ ਕਰੋ, ਪੂਰਾ ਹਿਸਾਬ ਦਿਸੇਗਾ ਤੇ ਜਲਦੀ ਐਂਟਰੀ ਵੀ ਜੋੜ ਸਕਦੇ ਹੋ।",
    tipBook: "ਹਰ ਐਂਟਰੀ ਇੱਥੇ ਹੀ ਰਹਿੰਦੀ ਹੈ। ਗਲਤ ਰਕਮ ਜਾਂ ਨਾਂ ਠੀਕ ਕਰਨ ਲਈ ਪੈਨਸਿਲ ਦਬਾਓ।",
    tipShare: "ਇਹਨਾਂ ਬਟਨਾਂ ਨਾਲ ਡਾਟਾ ਐਕਸਲ, ਗੂਗਲ ਸ਼ੀਟਸ ਜਾਂ ਕਾਗਜ਼ ਉੱਤੇ ਲੈ ਜਾਓ।",
    gotIt: "ਸਮਝ ਗਿਆ", next: "ਅੱਗੇ", skip: "ਛੱਡੋ", finish: "ਪੂਰਾ", step: "ਕਦਮ",
    t1h: "ਲੋਕਾਂ ਨੂੰ ਜੋੜੋ", t1: "'ਲੋਕ' ਵਿੱਚ ਜਾ ਕੇ ਆਪਣੇ ਗਾਹਕ ਜਾਂ ਵਿਦਿਆਰਥੀ ਜੋੜੋ।", t2h: "ਐਂਟਰੀ ਲਿਖੋ", t2: "ਵੱਡੇ 'ਐਂਟਰੀ ਜੋੜੋ' ਬਟਨ ਨਾਲ ਉਧਾਰ ਜਾਂ ਮਿਲੇ ਪੈਸੇ ਲਿਖੋ।",
    t3h: "ਡਾਟਾ ਸ਼ੇਅਰ ਕਰੋ", t3: "'ਸ਼ੇਅਰ ਤੇ ਪ੍ਰਿੰਟ' ਵਿੱਚ ਐਕਸਲ, ਗੂਗਲ ਸ਼ੀਟਸ ਜਾਂ ਪ੍ਰਿੰਟ ਮਿਲੇਗਾ।", t4h: "ਡਾਰਕ ਮੋਡ ਤੇ ਭਾਸ਼ਾ", t4: "'ਸੈਟਿੰਗ' ਵਿੱਚ ਰੂਪ ਰੰਗ, ਭਾਸ਼ਾ ਤੇ ਬੈਕਅੱਪ ਮਿਲੇਗਾ।",
    savedOnDevice: "ਇਸ ਡਿਵਾਈਸ ਉੱਤੇ ਸੇਵ ਹੈ", dataFor: "ਰਿਪੋਰਟ", generated: "ਬਣਾਈ ਗਈ", total: "ਕੁੱਲ", type: "ਕਿਸਮ", editDetails: "ਜਾਣਕਾਰੀ ਬਦਲੋ", youAre: "ਤੁਸੀਂ ਵਰਤ ਰਹੇ ਹੋ",
    emptyHint: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਪਹਿਲਾ ਵਿਅਕਤੀ ਜੋੜੋ",
    edit: "ਬਦਲੋ", editEntry: "ਐਂਟਰੀ ਬਦਲੋ", calculator: "ਕੈਲਕੁਲੇਟਰ", useAmount: "ਇਹ ਰਕਮ ਵਰਤੋ", addAsEntry: "ਐਂਟਰੀ ਬਣਾਓ", updated: "ਬਦਲਾਅ ਸੇਵ ਹੋ ਗਿਆ", madeBy: "ਬਣਾਇਆ", rights: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ।",
    t5h: "ਝਟਪਟ ਕੈਲਕੁਲੇਟਰ", t5: "ਬਿੱਲ ਜੋੜਨ ਲਈ ਕੈਲਕੁਲੇਟਰ ਆਈਕਨ ਦਬਾਓ। ਐਂਟਰੀ ਅੰਦਰ ਰਕਮ ਕੋਲ ਵਾਲਾ ਕੈਲਕੁਲੇਟਰ ਬਟਨ ਵਰਤੋ।"
  }
};

/* ============ saved data (stays in this browser) ============ */
const SAVE_KEY = 'khataDesk.v1';
const blankData = () => ({ shop: null, people: [], entries: [], look: 'light', lang: 'en', toured: false, tips: {} });
let data = readSaved();
let page = 'home';
let tourStep = -1;
let peopleFilter = 'all', peopleSearch = '', bookFilter = 'all', bookSearch = '';

function readSaved() {
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) return Object.assign(blankData(), JSON.parse(raw)); } catch (e) { }
  return blankData();
}
function keepSaved() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { toast('Storage full or blocked'); } }

/* ============ small helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const kind = () => (data.shop && data.shop.kind) || 'shop';
function say(k) { const L = WORDS[data.lang] || WORDS.en; return L[k + '_' + kind()] || L[k] || WORDS.en[k + '_' + kind()] || WORDS.en[k] || k; }
const creditLine = () => `<p class="made-by">© ${new Date().getFullYear()} <b><a href="https://liin-coders.github.io/liinstudio/">LiinStudio</a> </b>. ${say('rights')}<br>${say('madeBy')} <b><a href="https://liin-coders.github.io/liinstudio/">LiinStudio</a></b></p>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const rupees = n => '₹' + Number(n || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 });
const todayStr = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
const niceDate = s => { try { return new Date(s + 'T00:00').toLocaleDateString(data.lang === 'en' ? 'en-IN' : data.lang === 'hi' ? 'hi-IN' : 'pa-IN', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return s; } };
const icon = n => `<svg class="icon"><use href="#i-${n}"/></svg>`;
const faceColors = ['#4f46e5', '#7c3aed', '#0ea5e9', '#12a36b', '#f59e0b', '#e5484d', '#db2777', '#0d9488'];
const faceColor = s => faceColors[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % faceColors.length];
const firstLetter = s => (s || '?').trim().charAt(0).toUpperCase();

function balanceOf(personId) {
  return data.entries.filter(e => e.personId === personId).reduce((a, e) => a + (e.kind === 'due' ? +e.amount : -e.amount), 0);
}
function totals() {
  let due = 0, paid = 0;
  data.entries.forEach(e => { if (e.kind === 'due') due += +e.amount; else paid += +e.amount; });
  return { due, paid, pending: due - paid };
}
function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast-line'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2400);
}
function applyLook() {
  document.documentElement.dataset.look = data.look;
  document.documentElement.lang = data.lang;
  document.title = (data.shop ? data.shop.name + ' · ' : '') + say('appName');
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = data.look === 'dark' ? '#0e1020' : '#4f46e5';
}

/* ============ first screen ============ */
function showWelcome() {
  let chosen = 'shop';
  $('#root').innerHTML = `
  <div class="welcome-wrap"><div class="soft-card welcome-card">
    <div class="shop-logo" style="width:56px;height:56px;font-size:24px">K</div>
    <h1>${say('welcomeTitle')}</h1>
    <p class="sub">${say('welcomeSub')}</p>
    <label class="field"><span>${say('bizName')}</span><input id="shopNameBox" placeholder="e.g. Sharma General Store" autocomplete="off"></label>
    <label class="field"><span>${say('ownerName')}</span><input id="ownerNameBox" autocomplete="off"></label>
    <div class="field"><span>${say('whatKind')}</span>
      <div class="type-grid" id="kindGrid">
        <button class="on" data-k="shop">${icon('shop')}${say('kindShop')}</button>
        <button data-k="school">${icon('cap')}${say('kindSchool')}</button>
        <button data-k="other">${icon('brief')}${say('kindOther')}</button>
      </div></div>
    <div class="pair" style="margin-bottom:16px">
      <select id="welcomeLang"><option value="en">English</option><option value="hi">हिन्दी</option><option value="pa">ਪੰਜਾਬੀ</option></select>
      <select id="welcomeLook"><option value="light">☀ Light</option><option value="dark">☾ Dark</option></select>
    </div>
    <button class="big-button" id="startBtn" style="width:100%">${say('startNow')}</button>
    ${creditLine()}
  </div></div>`;
  $('#welcomeLang').value = data.lang; $('#welcomeLook').value = data.look;
  $$('#kindGrid button').forEach(b => b.onclick = () => { chosen = b.dataset.k; $$('#kindGrid button').forEach(x => x.classList.toggle('on', x === b)); });
  $('#welcomeLang').onchange = e => { data.lang = e.target.value; keepSaved(); applyLook(); showWelcome(); $('#welcomeLang').value = data.lang; };
  $('#welcomeLook').onchange = e => { data.look = e.target.value; keepSaved(); applyLook(); };
  $('#startBtn').onclick = () => {
    const name = $('#shopNameBox').value.trim();
    if (!name) { $('#shopNameBox').focus(); $('#shopNameBox').style.borderColor = 'var(--bad)'; return; }
    data.shop = { name, owner: $('#ownerNameBox').value.trim(), kind: chosen };
    keepSaved(); applyLook(); drawApp(); setTimeout(() => { tourStep = 0; drawTour(); }, 500);
  };
}

/* ============ main frame ============ */
const MENU = [['home', 'home', 'menuHome'], ['people', 'users', 'menuPeople'], ['book', 'book', 'menuBook'], ['share', 'download', 'menuShare'], ['settings', 'sliders', 'menuSettings']];
function menuHtml() {
  return MENU.map(([id, ic, label]) => `<button class="menu-link ${page === id ? 'is-here' : ''}" data-go="${id}">${icon(ic)}<span>${id === 'people' ? say('people') : say(label)}</span></button>`).join('');
}
function drawApp() {
  applyLook();
  if (!data.shop) { showWelcome(); return; }
  const titleMap = { home: say('menuHome'), people: say('people'), book: say('menuBook'), share: say('menuShare'), settings: say('menuSettings') };
  $('#root').innerHTML = `
  <div class="app-shell">
    <aside class="side-menu">
      <div class="shop-brand"><div class="shop-logo">${esc(firstLetter(data.shop.name))}</div><div><b>${esc(data.shop.name)}</b><small>${say('appName')}</small></div></div>
      ${menuHtml()}
      <div class="side-foot">${icon('shop')} ${say('savedOnDevice')}</div>
    </aside>
    <main class="main-side">
      <div class="top-bar">
        <h1>${titleMap[page]}</h1>
        <div class="top-tools">
          <span class="net-pill ${navigator.onLine ? '' : 'is-off'}" id="netPill"><span class="net-dot"></span><span>${navigator.onLine ? say('online') : say('offline')}</span></span>
          <select class="lang-pick" id="quickLang"><option value="en">EN</option><option value="hi">हिं</option><option value="pa">ਪੰ</option></select>
          <button class="round-btn" id="calcBtn" title="${say('calculator')}">${icon('calc')}</button>
          <button class="round-btn" id="lookBtn" title="Dark / Light">${icon(data.look === 'dark' ? 'sun' : 'moon')}</button>
          <button class="round-btn" id="helpBtn" title="Help">${icon('help')}</button>
        </div>
      </div>
      <div id="pageBody"></div>
      ${creditLine()}
    </main>
    <nav class="phone-nav">${menuHtml()}</nav>
  </div>`;
  $('#quickLang').value = data.lang;
  $('#quickLang').onchange = e => { data.lang = e.target.value; keepSaved(); drawApp(); };
  $('#calcBtn').onclick = () => openCalc({});
  $('#lookBtn').onclick = () => { data.look = data.look === 'dark' ? 'light' : 'dark'; keepSaved(); drawApp(); };
  $('#helpBtn').onclick = () => { tourStep = 0; drawTour(); };
  $$('[data-go]').forEach(b => b.onclick = () => { page = b.dataset.go; drawApp(); window.scrollTo({ top: 0 }); });
  const draw = { home: drawHome, people: drawPeople, book: drawBook, share: drawShare, settings: drawSettings }[page];
  draw($('#pageBody'));
  if (tourStep >= 0) drawTour();
}

function tipBox(key, text) {
  if (data.tips[key]) return '';
  return `<div class="tip-strip">${icon('help')}<div>${text}</div><button data-closetip="${key}">${icon('x')}</button></div>`;
}
function wireTips(root) {
  $$('[data-closetip]', root).forEach(b => b.onclick = () => { data.tips[b.dataset.closetip] = 1; keepSaved(); b.closest('.tip-strip').remove(); });
}

/* ============ home ============ */
function drawHome(box) {
  const T = totals();
  const today = data.entries.filter(e => e.date === todayStr()).length;
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); });
  const perDay = days.map(day => ({
    day,
    due: data.entries.filter(e => e.date === day && e.kind === 'due').reduce((a, e) => a + +e.amount, 0),
    paid: data.entries.filter(e => e.date === day && e.kind === 'paid').reduce((a, e) => a + +e.amount, 0)
  }));
  const peak = Math.max(1, ...perDay.map(d => Math.max(d.due, d.paid)));
  const top = data.people.map(p => ({ p, b: balanceOf(p.id) })).filter(x => x.b > 0).sort((a, b) => b.b - a.b).slice(0, 5);
  box.innerHTML = `
  ${tipBox('home', say('tipHome'))}
  <div class="soft-card hello-box">
    <div><h2>${say('hello')}, ${esc(data.shop.owner || data.shop.name)} 👋</h2><p>${say('helloSub')}</p></div>
    <button class="white-button" id="homeAdd">${icon('plus')}${say('quickEntry')}</button>
  </div>
  <div class="number-row">
    <div class="soft-card number-card"><div class="bubble" style="background:var(--bad)"></div><small>${say('totalPending')}</small><strong class="money-red">${rupees(T.pending)}</strong></div>
    <div class="soft-card number-card"><div class="bubble" style="background:var(--good)"></div><small>${say('totalReceived')}</small><strong class="money-green">${rupees(T.paid)}</strong></div>
    <div class="soft-card number-card"><div class="bubble" style="background:var(--brand)"></div><small>${say('headCount')}</small><strong>${data.people.length}</strong></div>
    <div class="soft-card number-card"><div class="bubble" style="background:var(--warn)"></div><small>${say('todayEntries')}</small><strong>${today}</strong></div>
  </div>
  <div class="two-cols">
    <div class="soft-card"><div class="card-title">${say('last7')}</div>
      <div class="week-bars">${perDay.map(d => `<div class="bar-col"><div class="bar-pair"><i class="bar-red" style="height:${d.due / peak * 100}%"></i><i class="bar-green" style="height:${d.paid / peak * 100}%"></i></div><small>${d.day.slice(8)}</small></div>`).join('')}</div>
      <div style="display:flex;gap:16px;margin-top:12px;font-size:12px;color:var(--ink-soft)"><span><b class="money-red">●</b> ${say('due')}</span><span><b class="money-green">●</b> ${say('paid')}</span></div>
    </div>
    <div class="soft-card"><div class="card-title">${say('topPending')}</div>
      ${top.length ? `<div class="who-list">${top.map(x => whoRow(x.p, x.b)).join('')}</div>` : `<div class="empty-note">${icon('users')}<div>${data.people.length ? '🎉 ' + say('clear') : say('emptyHint')}</div></div>`}
    </div>
  </div>`;
  wireTips(box); wireWho(box);
  $('#homeAdd').onclick = () => entryPopup();
}

function whoRow(p, b) {
  return `<button class="who-row" data-who="${p.id}"><span class="face" style="background:${faceColor(p.name)}">${esc(firstLetter(p.name))}</span>
    <span class="grow"><b>${esc(p.name)}</b><small>${esc(p.phone || p.note || '—')}</small></span>
    <span class="${b > 0 ? 'money-red' : 'money-green'}">${b > 0 ? rupees(b) : (b < 0 ? '+' + rupees(-b) : '✓')}</span></button>`;
}
function wireWho(root) { $$('[data-who]', root).forEach(b => b.onclick = () => personPopup(b.dataset.who)); }

/* ============ people ============ */
function drawPeople(box) {
  box.innerHTML = `${tipBox('people', say('tipPeople'))}
  <div class="search-line">
    <div class="field-wrap">${icon('search')}<input id="peopleFind" placeholder="${say('search')}" value="${esc(peopleSearch)}"></div>
    <button class="big-button" id="addWho">${icon('plus')}${say('addPerson')}</button>
  </div>
  <div class="chip-row"><button class="chip ${peopleFilter === 'all' ? 'on' : ''}" data-pf="all">${say('all')}</button><button class="chip ${peopleFilter === 'pending' ? 'on' : ''}" data-pf="pending">${say('pending')}</button><button class="chip ${peopleFilter === 'clear' ? 'on' : ''}" data-pf="clear">${say('clear')}</button></div>
  <div class="soft-card"><div class="who-list" id="peopleList"></div></div>`;
  wireTips(box);
  const fill = () => {
    const q = peopleSearch.toLowerCase();
    const rows = data.people.filter(p => (p.name + ' ' + (p.phone || '')).toLowerCase().includes(q))
      .map(p => ({ p, b: balanceOf(p.id) }))
      .filter(x => peopleFilter === 'all' || (peopleFilter === 'pending' ? x.b > 0 : x.b <= 0))
      .sort((a, b) => b.b - a.b);
    $('#peopleList').innerHTML = rows.length ? rows.map(x => whoRow(x.p, x.b)).join('') : `<div class="empty-note">${icon('users')}<div>${data.people.length ? say('nothing') : say('emptyHint')}</div></div>`;
    wireWho($('#peopleList'));
  };
  fill();
  $('#peopleFind').oninput = e => { peopleSearch = e.target.value; fill(); };
  $$('[data-pf]').forEach(b => b.onclick = () => { peopleFilter = b.dataset.pf; drawPeople(box); });
  $('#addWho').onclick = () => personForm();
}

/* ============ money book ============ */
function drawBook(box) {
  box.innerHTML = `${tipBox('book', say('tipBook'))}
  <div class="search-line">
    <div class="field-wrap">${icon('search')}<input id="bookFind" placeholder="${say('search')}" value="${esc(bookSearch)}"></div>
    <button class="big-button" id="bookAdd">${icon('plus')}${say('addEntry')}</button>
  </div>
  <div class="chip-row"><button class="chip ${bookFilter === 'all' ? 'on' : ''}" data-bf="all">${say('all')}</button><button class="chip ${bookFilter === 'due' ? 'on' : ''}" data-bf="due">${say('due')}</button><button class="chip ${bookFilter === 'paid' ? 'on' : ''}" data-bf="paid">${say('paid')}</button></div>
  <div class="soft-card"><div class="who-list" id="bookList"></div></div>`;
  wireTips(box);
  const fill = () => {
    const q = bookSearch.toLowerCase();
    const rows = data.entries.slice().sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id))
      .filter(e => bookFilter === 'all' || e.kind === bookFilter)
      .filter(e => { const p = data.people.find(x => x.id === e.personId); return ((p ? p.name : '') + ' ' + (p && p.phone || '') + ' ' + (e.note || '')).toLowerCase().includes(q); });
    $('#bookList').innerHTML = rows.length ? rows.map(e => entryRow(e, true)).join('') : `<div class="empty-note">${icon('book')}<div>${say('nothing')}</div></div>`;
    wireEntryActions($('#bookList'));
  };
  fill();
  $('#bookFind').oninput = e => { bookSearch = e.target.value; fill(); };
  $$('[data-bf]').forEach(b => b.onclick = () => { bookFilter = b.dataset.bf; drawBook(box); });
  $('#bookAdd').onclick = () => entryPopup();
}
function entryRow(e, showName) {
  const p = data.people.find(x => x.id === e.personId);
  const isDue = e.kind === 'due';
  return `<div class="who-row" style="cursor:default">
    <span class="face" style="background:${isDue ? 'var(--bad)' : 'var(--good)'}">${isDue ? '↑' : '↓'}</span>
    <span class="grow"><b>${showName ? esc(p ? p.name : '?') : (isDue ? say('due') : say('paid'))}</b><small>${niceDate(e.date)}${showName ? ' · ' + (isDue ? say('due') : say('paid')) : ''}${e.note ? ' · ' + esc(e.note) : ''}</small></span>
    <span class="${isDue ? 'money-red' : 'money-green'}">${isDue ? '' : '+'}${rupees(e.amount)}</span>
    <span class="row-tools"><button class="tiny-btn edit" data-editentry="${e.id}" title="${say('edit')}">${icon('edit')}</button><button class="tiny-btn" data-delentry="${e.id}" title="${say('delete')}">${icon('trash')}</button></span></div>`;
}
function wireEntryActions(root, after) {
  $$('[data-editentry]', root).forEach(b => b.onclick = ev => {
    ev.stopPropagation();
    entryPopup({ entryId: b.dataset.editentry, onDone: after });
  });
  $$('[data-delentry]', root).forEach(b => b.onclick = ev => {
    ev.stopPropagation();
    if (!confirm(say('sureDelete'))) return;
    data.entries = data.entries.filter(e => e.id !== b.dataset.delentry); keepSaved();
    if (after) after(); else drawApp();
  });
}

/* ============ popups ============ */
function openPop(html) {
  $('#layer').innerHTML = `<div class="dim-layer" id="dim"><div class="pop-box">${html}</div></div>`;
  $('#dim').onclick = e => { if (e.target.id === 'dim') closePop(); };
  $$('[data-closepop]').forEach(b => b.onclick = closePop);
}
function closePop() { $('#layer').innerHTML = ''; }

function personForm(editId, onDone) {
  const old = editId ? data.people.find(x => x.id === editId) : null;
  openPop(`<div class="pop-head"><h3>${old ? say('editDetails') : say('addPerson') + ' ' + say('one')}</h3><button class="round-btn" data-closepop>${icon('x')}</button></div>
    <label class="field"><span>${say('name')}</span><input id="pfName" autocomplete="off" value="${esc(old ? old.name : '')}"></label>
    <label class="field"><span>${say('phone')}</span><input id="pfPhone" type="tel" inputmode="tel" value="${esc(old ? old.phone : '')}"></label>
    <label class="field"><span>${say('note')}</span><input id="pfNote" value="${esc(old ? old.note : '')}"></label>
    <div class="pop-actions"><button class="quiet-button" data-closepop>${say('cancel')}</button><button class="big-button" id="pfSave">${say('save')}</button></div>`);
  setTimeout(() => { const f = $('#pfName'); if (f) f.focus(); }, 50);
  $('#pfSave').onclick = () => {
    const name = $('#pfName').value.trim();
    if (!name) { $('#pfName').style.borderColor = 'var(--bad)'; return; }
    const fields = { name, phone: $('#pfPhone').value.trim(), note: $('#pfNote').value.trim() };
    if (old) { Object.assign(old, fields); toast(say('updated')); }
    else data.people.push(Object.assign({ id: uid() }, fields));
    keepSaved(); closePop(); drawApp();
    if (onDone) onDone();
  };
}

function entryPopup(opts) {
  opts = (typeof opts === 'string') ? { personId: opts } : (opts || {});
  const old = opts.entryId ? data.entries.find(x => x.id === opts.entryId) : null;
  if (!data.people.length) { toast(say('emptyHint')); page = 'people'; drawApp(); personForm(); return; }
  let k = old ? old.kind : 'due';
  openPop(`<div class="pop-head"><h3>${old ? say('editEntry') : say('addEntry')}</h3><button class="round-btn" data-closepop>${icon('x')}</button></div>
    <label class="field"><span>${say('one')}</span><select id="efWho">${data.people.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></label>
    <div class="kind-switch"><button id="kDue" type="button">${say('due')}</button><button id="kPaid" type="button">${say('paid')}</button></div>
    <div class="pair"><div class="field"><span>${say('amount')} (₹)</span><div class="amt-wrap"><input id="efAmt" type="number" inputmode="decimal" min="0" step="any" value="${old ? old.amount : (opts.amount || '')}"><button class="round-btn" id="efCalc" type="button" title="${say('calculator')}">${icon('calc')}</button></div></div>
    <label class="field"><span>${say('date')}</span><input id="efDate" type="date" value="${old ? old.date : todayStr()}"></label></div>
    <label class="field"><span>${say('note')}</span><input id="efNote" value="${esc(old ? old.note : '')}"></label>
    <div class="pop-actions"><button class="quiet-button" data-closepop>${say('cancel')}</button><button class="big-button" id="efSave">${say('save')}</button></div>`);
  $('#efWho').value = old ? old.personId : (opts.personId || data.people[0].id);
  if (!old) setTimeout(() => { const f = $('#efAmt'); if (f) f.focus(); }, 50);
  const paint = () => { $('#kDue').className = k === 'due' ? 'on-due' : ''; $('#kPaid').className = k === 'paid' ? 'on-paid' : ''; };
  paint();
  $('#kDue').onclick = () => { k = 'due'; paint(); };
  $('#kPaid').onclick = () => { k = 'paid'; paint(); };
  $('#efCalc').onclick = () => openCalc({ start: $('#efAmt').value, onUse: v => { $('#efAmt').value = v; } });
  $('#efSave').onclick = () => {
    const amt = parseFloat($('#efAmt').value);
    if (!(amt > 0)) { $('#efAmt').style.borderColor = 'var(--bad)'; return; }
    const fields = { personId: $('#efWho').value, kind: k, amount: amt, date: $('#efDate').value || todayStr(), note: $('#efNote').value.trim() };
    if (old) { Object.assign(old, fields); toast(say('updated')); }
    else data.entries.push(Object.assign({ id: uid() }, fields));
    keepSaved(); closePop(); drawApp();
    if (opts.onDone) opts.onDone();
  };
}

/* ============ calculator ============ */
let calcLive = null;
function calcValue(expr) {
  const s = expr.replace(/[+\-×÷.]+$/, '');
  const t = s.match(/\d*\.?\d+|\d+\.|[+\-×÷%]/g);
  if (!t) return null;
  let i = 0;
  const plain = f => f.pct ? f.v / 100 : f.v;
  const factor = () => {
    let sign = 1;
    while (t[i] === '-') { sign = -sign; i++; }
    if (t[i] === undefined || /^[+\-×÷%]$/.test(t[i])) throw 0;
    const v = parseFloat(t[i++]) * sign;
    let pct = false;
    if (t[i] === '%') { pct = true; i++; }
    return { v, pct };
  };
  const term = () => {
    const f = factor();
    if (t[i] !== '×' && t[i] !== '÷') return f;
    let v = plain(f);
    while (t[i] === '×' || t[i] === '÷') {
      const op = t[i++]; const g = plain(factor());
      if (op === '÷' && g === 0) throw 0;
      v = op === '×' ? v * g : v / g;
    }
    return { v, pct: false };
  };
  try {
    let v = plain(term());
    while (i < t.length) {
      const op = t[i++];
      if (op !== '+' && op !== '-') throw 0;
      const b = term();
      const bv = b.pct ? v * b.v / 100 : b.v;
      v = op === '+' ? v + bv : v - bv;
    }
    return Number.isFinite(v) ? Math.round(v * 100) / 100 : null;
  } catch (e) { return null; }
}
function calcKeys(e) {
  if (!calcLive) return;
  const map = { '*': '×', '/': '÷', 'Enter': '=', 'Backspace': 'DEL', 'Delete': 'AC' };
  const k = map[e.key] || e.key;
  if (/^[0-9.+\-×÷%=]$/.test(k) || k === 'DEL' || k === 'AC') { e.preventDefault(); calcLive(k); }
}
document.addEventListener('keydown', calcKeys);
function closeCalc() { calcLive = null; $('#layer2').innerHTML = ''; }
function openCalc(opts) {
  opts = opts || {};
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  let expr = (opts.start && +opts.start > 0) ? String(opts.start) : '';
  const keys = [['AC', 'AC', 'op'], ['⌫', 'DEL', 'op'], ['%', '%', 'op'], ['÷', '÷', 'op'], ['7'], ['8'], ['9'], ['×', '×', 'op'], ['4'], ['5'], ['6'], ['−', '-', 'op'], ['1'], ['2'], ['3'], ['+', '+', 'op'], ['0'], ['00'], ['.'], ['=', '=', 'go']];
  $('#layer2').innerHTML = `<div class="dim-layer" id="dim2"><div class="pop-box" style="max-width:340px">
    <div class="pop-head"><h3>${say('calculator')}</h3><button class="round-btn" id="cClose">${icon('x')}</button></div>
    <div class="calc-screen"><div class="calc-expr" id="cExpr"></div><div class="calc-result" id="cRes">0</div></div>
    <div class="calc-pad">${keys.map(k => `<button class="calc-key ${k[2] || ''}" data-ck="${k[1] || k[0]}">${k[0]}</button>`).join('')}</div>
    <button class="big-button" id="cUse" style="width:100%">${opts.onUse ? say('useAmount') : say('addAsEntry')}</button></div></div>`;
  const show = () => {
    $('#cExpr').textContent = expr.replace(/-/g, '−').replace(/([+−×÷])/g, ' $1 ').trim();
    const v = calcValue(expr);
    $('#cRes').textContent = v === null ? '0' : v.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };
  calcLive = key => {
    if (expr.length > 40 && /^[0-9.]|00$/.test(key)) return;
    if (key === 'AC') expr = '';
    else if (key === 'DEL') expr = expr.slice(0, -1);
    else if (key === '=') { const v = calcValue(expr); if (v !== null) expr = String(v); }
    else if (key === '%') { if (/\d$/.test(expr)) expr += '%'; }
    else if (/^[+\-×÷]$/.test(key)) {
      if (!expr) { if (key === '-') expr = '-'; }
      else if (/[+\-×÷]$/.test(expr)) expr = expr.slice(0, -1) + key;
      else expr += key;
    }
    else if (key === '.') {
      const cur = expr.split(/[+\-×÷]/).pop();
      if (!cur.includes('.') && !cur.endsWith('%')) expr += cur === '' ? '0.' : '.';
    }
    else if (/^\d+$/.test(key)) {
      if (expr.endsWith('%')) return;
      if (key === '00' && (expr === '' || /[+\-×÷]$/.test(expr))) key = '0';
      expr += key;
    }
    show();
  };
  $$('[data-ck]', $('#layer2')).forEach(b => b.onclick = () => { calcLive(b.dataset.ck); b.blur(); });
  $('#cClose').onclick = closeCalc;
  $('#dim2').onclick = e => { if (e.target.id === 'dim2') closeCalc(); };
  $('#cUse').onclick = () => {
    const v = calcValue(expr);
    if (!(v > 0)) { $('#cRes').style.color = 'var(--bad)'; setTimeout(() => $('#cRes').style.color = '', 600); return; }
    closeCalc();
    if (opts.onUse) opts.onUse(v); else entryPopup({ amount: v });
  };
  show();
}

function personPopup(id) {
  const p = data.people.find(x => x.id === id); if (!p) return;
  const b = balanceOf(id);
  const list = data.entries.filter(e => e.personId === id).sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id));
  openPop(`<div class="pop-head"><h3>${esc(p.name)}</h3><button class="round-btn" data-closepop>${icon('x')}</button></div>
    <div class="soft-card" style="margin-bottom:14px;text-align:center;box-shadow:none"><small style="color:var(--ink-soft)">${say('balance')}</small>
      <div style="font-size:28px;font-weight:700" class="${b > 0 ? 'money-red' : 'money-green'}">${rupees(Math.abs(b))}</div>
      <small style="color:var(--ink-soft)">${esc(p.phone || '')} ${p.note ? '· ' + esc(p.note) : ''}</small></div>
    <div class="pop-actions" style="justify-content:space-between;margin-bottom:14px"><button class="big-button" id="ppAdd">${icon('plus')}${say('quickEntry')}</button>
      <button class="quiet-button" id="ppEdit">${icon('edit')}${say('edit')}</button>
      <button class="quiet-button danger-text" id="ppDel">${icon('trash')}${say('delete')}</button></div>
    <div class="card-title" style="font-size:14px">${say('history')}</div>
    <div class="who-list" id="ppHist">${list.length ? list.map(e => entryRow(e, false)).join('') : `<div class="empty-note">${say('nothing')}</div>`}</div>`);
  $('#ppAdd').onclick = () => entryPopup({ personId: id, onDone: () => personPopup(id) });
  $('#ppEdit').onclick = () => personForm(id, () => personPopup(id));
  $('#ppDel').onclick = () => { if (!confirm(say('sureDelete'))) return; data.people = data.people.filter(x => x.id !== id); data.entries = data.entries.filter(e => e.personId !== id); keepSaved(); closePop(); drawApp(); };
  wireEntryActions($('#ppHist'), () => { keepSaved(); drawApp(); personPopup(id); });
}

/* ============ share: Excel / Google Sheets / Print ============ */
function tableRows() {
  const head = [say('one'), say('phone').replace(/ \(.*\)/, ''), say('due'), say('paid'), say('balance')];
  const rows = data.people.map(p => {
    const es = data.entries.filter(e => e.personId === p.id);
    const d = es.filter(e => e.kind === 'due').reduce((a, e) => a + +e.amount, 0);
    const r = es.filter(e => e.kind === 'paid').reduce((a, e) => a + +e.amount, 0);
    return [p.name, p.phone || '', d, r, d - r];
  });
  const entryHead = [say('date'), say('one'), say('type'), say('amount'), say('note')];
  const entryRows = data.entries.slice().sort((a, b) => a.date.localeCompare(b.date)).map(e => {
    const p = data.people.find(x => x.id === e.personId);
    return [e.date, p ? p.name : '?', e.kind === 'due' ? say('due') : say('paid'), e.amount, e.note || ''];
  });
  return { head, rows, entryHead, entryRows };
}
const csvCell = v => '"' + String(v).replace(/"/g, '""') + '"';
function makeCsv(sep = ',') {
  const t = tableRows();
  const lines = [[data.shop.name], [], t.head, ...t.rows, [], t.entryHead, ...t.entryRows];
  return lines.map(r => r.map(csvCell).join(sep)).join('\r\n');
}
function downloadFile(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const fileBase = () => (data.shop.name || 'khata').replace(/[^\w\u0900-\u097F\u0A00-\u0A7F]+/g, '-') + '-' + todayStr();

function doExcel() { downloadFile(fileBase() + '.csv', '\ufeff' + makeCsv(','), 'text/csv;charset=utf-8'); toast(say('fileSaved')); }
async function doSheets() {
  const tsv = makeCsv('\t').replace(/"/g, '');
  try { await navigator.clipboard.writeText(tsv); }
  catch (e) { const ta = document.createElement('textarea'); ta.value = tsv; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
  toast(say('copiedSheets'));
  if (navigator.onLine) setTimeout(() => window.open('https://sheets.new', '_blank'), 700);
}
function doPrint() {
  const t = tableRows();
  const tbl = (h, r) => `<table><thead><tr>${h.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${r.map(row => `<tr>${row.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const w = window.open('', '_blank');
  if (!w) { toast('Allow pop-ups to print'); return; }
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(data.shop.name)}</title><style>
    body{font-family:system-ui,'Noto Sans Devanagari','Noto Sans Gurmukhi',sans-serif;padding:28px;color:#1b1d36}
    h1{margin:0 0 4px}p{color:#666;margin:0 0 20px}h2{margin:26px 0 8px;font-size:16px}
    table{width:100%;border-collapse:collapse;font-size:13px}th,td{border:1px solid #ddd;padding:7px 10px;text-align:left}th{background:#eef0fa}
  </style></head><body><h1>${esc(data.shop.name)}</h1><p>${say('dataFor')} · ${say('generated')} ${niceDate(todayStr())}</p>
  ${tbl(t.head, t.rows)}<h2>${say('history')}</h2>${tbl(t.entryHead, t.entryRows)}<p style="margin-top:30px;color:#888;font-size:12px">© ${new Date().getFullYear()} LiinStudio · ${say('madeBy')} LiinStudio</p></body></html>`);
  w.document.close(); w.focus(); setTimeout(() => w.print(), 400);
}

function drawShare(box) {
  const T = totals();
  box.innerHTML = `${tipBox('share', say('tipShare'))}
  <div class="share-grid">
    <button class="share-tile" id="sx"><span class="badge" style="background:#12a36b">${icon('grid')}</span><b>${say('exportExcel')}</b><small>${say('exportExcelHint')}</small></button>
    <button class="share-tile" id="sg"><span class="badge" style="background:#0ea5e9">${icon('upload')}</span><b>${say('exportSheets')}</b><small>${say('exportSheetsHint')}</small></button>
    <button class="share-tile" id="sp"><span class="badge" style="background:#7c3aed">${icon('printer')}</span><b>${say('printIt')}</b><small>${say('printHint')}</small></button>
  </div>
  <div class="soft-card" style="margin-top:18px"><div class="card-title">${esc(data.shop.name)}</div>
    <div class="setting-line"><span>${say('totalPending')}</span><b class="money-red">${rupees(T.pending)}</b></div>
    <div class="setting-line"><span>${say('totalReceived')}</span><b class="money-green">${rupees(T.paid)}</b></div>
    <div class="setting-line"><span>${say('headCount')}</span><b>${data.people.length}</b></div></div>`;
  wireTips(box);
  $('#sx').onclick = doExcel; $('#sg').onclick = doSheets; $('#sp').onclick = doPrint;
}

/* ============ settings ============ */
function drawSettings(box) {
  box.innerHTML = `<div class="soft-card">
    <div class="setting-line"><div><b>${esc(data.shop.name)}</b><small>${say('shopDetailsHint')}</small></div><button class="quiet-button" id="seShop">${say('editDetails')}</button></div>
    <div class="setting-line"><div><b>${say('look')}</b><small>${say('lookHint')}</small></div><button class="quiet-button" id="seLook">${icon(data.look === 'dark' ? 'sun' : 'moon')}${data.look === 'dark' ? 'Light' : 'Dark'}</button></div>
    <div class="setting-line"><div><b>${say('language')}</b><small>${say('languageHint')}</small></div>
      <select id="seLang" style="width:auto"><option value="en">English</option><option value="hi">हिन्दी</option><option value="pa">ਪੰਜਾਬੀ</option></select></div>
    <div class="setting-line"><div><b>${say('backup')}</b><small>${say('backupHint')}</small></div><button class="quiet-button" id="seBackup">${icon('download')}${say('backup')}</button></div>
    <div class="setting-line"><div><b>${say('restore')}</b><small>${say('restoreHint')}</small></div><button class="quiet-button" id="seRestore">${icon('upload')}${say('restore')}</button><input type="file" id="seFile" accept=".json" hidden></div>
    <div class="setting-line"><div><b class="danger-text">${say('wipe')}</b><small>${say('wipeHint')}</small></div><button class="quiet-button danger-text" id="seWipe">${icon('trash')}${say('wipe')}</button></div>
  </div>
  <p style="text-align:center;color:var(--ink-soft);font-size:12px;margin-top:16px">${navigator.onLine ? '' : say('offlineNote')}</p>`;
  $('#seLang').value = data.lang;
  $('#seLang').onchange = e => { data.lang = e.target.value; keepSaved(); drawApp(); };
  $('#seLook').onclick = () => { data.look = data.look === 'dark' ? 'light' : 'dark'; keepSaved(); drawApp(); };
  $('#seBackup').onclick = () => { downloadFile('khata-backup-' + todayStr() + '.json', JSON.stringify(data), 'application/json'); toast(say('fileSaved')); };
  $('#seRestore').onclick = () => $('#seFile').click();
  $('#seFile').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { const d = JSON.parse(r.result); if (!d.people || !d.entries) throw 0; data = Object.assign(blankData(), d); keepSaved(); drawApp(); toast(say('restored')); } catch (x) { toast('Invalid file'); } };
    r.readAsText(f);
  };
  $('#seWipe').onclick = () => { if (!confirm(say('sureDelete'))) return; try { localStorage.removeItem(SAVE_KEY); } catch (e) { } data = blankData(); toast(say('wiped')); drawApp(); };
  $('#seShop').onclick = () => {
    openPop(`<div class="pop-head"><h3>${say('shopDetails')}</h3><button class="round-btn" data-closepop>${icon('x')}</button></div>
      <label class="field"><span>${say('bizName')}</span><input id="esName" value="${esc(data.shop.name)}"></label>
      <label class="field"><span>${say('ownerName')}</span><input id="esOwner" value="${esc(data.shop.owner)}"></label>
      <label class="field"><span>${say('whatKind')}</span><select id="esKind"><option value="shop">${say('kindShop')}</option><option value="school">${say('kindSchool')}</option><option value="other">${say('kindOther')}</option></select></label>
      <div class="pop-actions"><button class="quiet-button" data-closepop>${say('cancel')}</button><button class="big-button" id="esSave">${say('save')}</button></div>`);
    $('#esKind').value = data.shop.kind;
    $('#esSave').onclick = () => { const n = $('#esName').value.trim(); if (!n) return; data.shop = { name: n, owner: $('#esOwner').value.trim(), kind: $('#esKind').value }; keepSaved(); closePop(); drawApp(); };
  };
}

/* ============ how-to tour ============ */
function drawTour() {
  const steps = [['t1h', 't1', 'people'], ['t2h', 't2', 'book'], ['t5h', 't5', 'calc'], ['t3h', 't3', 'share'], ['t4h', 't4', 'settings']];
  $$('.tour-card').forEach(x => x.remove());
  $$('.spotlight').forEach(x => x.classList.remove('spotlight'));
  if (tourStep < 0) return;
  const s = steps[tourStep];
  $$(`[data-go="${s[2]}"]`).forEach(b => b.classList.add('spotlight'));
  if (s[2] === 'calc') { const cb = $('#calcBtn'); if (cb) cb.classList.add('spotlight'); }
  const card = document.createElement('div'); card.className = 'tour-card';
  card.innerHTML = `<b>${say(s[0])}</b><p>${say(s[1])}</p><div class="tour-foot"><span>${say('step')} ${tourStep + 1}/${steps.length}</span><span><button id="tSkip" style="background:none;opacity:.7">${say('skip')}</button> <button id="tNext">${tourStep === steps.length - 1 ? say('finish') : say('next')}</button></span></div>`;
  document.body.appendChild(card);
  const end = () => { tourStep = -1; data.toured = true; keepSaved(); drawTour(); };
  $('#tSkip').onclick = end;
  $('#tNext').onclick = () => { if (tourStep === steps.length - 1) end(); else { tourStep++; drawTour(); } };
}

/* ============ online / offline ============ */
function netChanged() {
  const pill = $('#netPill'); if (!pill) return;
  pill.classList.toggle('is-off', !navigator.onLine);
  pill.lastElementChild.textContent = navigator.onLine ? say('online') : say('offline');
  if (!navigator.onLine) toast(say('offlineNote'));
}
window.addEventListener('online', netChanged);
window.addEventListener('offline', netChanged);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if ($('#layer2').innerHTML) closeCalc(); else closePop(); } });

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => { });
}

drawApp();