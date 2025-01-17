---
title: Εξερευνητές Block
description: Μια εισαγωγή στους εξερευνητές block, η πύλη σας στον κόσμο των δεδομένων blockchain, όπου μπορείτε να ζητήσετε πληροφορίες σχετικά με συναλλαγές, λογαριασμούς, συμβόλαια και πολλά άλλα.
lang: el
sidebarDepth: 3
---

Οι εξερευνητές block είναι η πύλη σας για τα δεδομένα του Ethereum. Μπορείτε να τα χρησιμοποιήσετε για να δείτε δεδομένα σε πραγματικό χρόνο για μπλοκ, συναλλαγές, επικυρωτές, λογαριασμούς και άλλες on-chain δραστηριότητες.

## Προαπαιτούμενα {#prerequisites}

Θα πρέπει να κατανοήσετε τις βασικές έννοιες του Ethereum ώστε να μπορείτε να κατανοήσετε τα δεδομένα που σας δίνει ένας εξερευνητής μπλοκ. Ξεκινήστε με την [εισαγωγή στο Ethereum](/developers/docs/intro-to-ethereum/).

## Υπηρεσίες {#services}

- [Etherscan](https://etherscan.io/) -_διαθέσιμο στα Κινεζικά, Κορεατικά, Ρωσικά και Ιαπωνικά_
- [3xpl](https://3xpl.com/ethereum)
- [Beaconcha.in](https://beaconcha.in/)
- [Blockchair](https://blockchair.com/ethereum) -_διαθέσιμο στα Ισπανικά, Γαλλικά, Ιταλικά, Ολλανδικά, Πορτογαλικά, Ρωσικά, Κινέζικα και Φαρσί_
- [Blockscout](https://eth.blockscout.com/)
- [Chainlens](https://www.chainlens.com/)
- [Εξερευνητής Block DexGuru](https://ethereum.dex.guru/)
- [Etherchain](https://www.etherchain.org/)
- [Ethernow](https://www.ethernow.xyz/)
- [Ethplorer](https://ethplorer.io/) -_διαθέσιμο στα Κινεζικά, Ισπανικά, Γαλλικά, Τουρκικά, Ρωσικά, Κορεατικά και Βιετναμεζικά_
- [EthVM](https://www.ethvm.com/)
- [OKLink](https://www.oklink.com/eth)
- [Rantom](https://rantom.app/)
- [Ethseer](https://ethseer.io)

## Εργαλεία ανοιχτού κώδικα {#open-source-tools}

- [Otterscan](https://otterscan.io/)
- [lazy-etherscan](https://github.com/woxjro/lazy-etherscan)

## Δεδομένα {#data}

Το Ethereum είναι διαφανές από τη σχεδίασή του, επομένως όλα είναι επαληθεύσιμα. Οι εξερευνητές block παρέχουν ένα περιβάλλον για τη λήψη αυτών των πληροφοριών. Και αυτό είναι τόσο για το κύριο δίκτυο Ethereum όσο και για τα δίκτυα δοκιμών, εάν χρειάζεστε αυτά τα δεδομένα. Τα δεδομένα χωρίζονται σε δεδομένα εκτέλεσης και δεδομένα συναίνεσης. Τα δεδομένα εκτέλεσης αναφέρονται στις συναλλαγές που έχουν εκτελεστεί σε ένα συγκεκριμένο block. Τα δεδομένα συναίνεσης αναφέρονται στα ίδια τα block και τους επικυρωτές που τα πρότειναν.

Ακολουθεί μια σύνοψη των τύπων δεδομένων που μπορείτε να λάβετε από έναν εξερευνητή block.

### Δεδομένα εκτέλεσης {#execution-data}

Νέα block προστίθενται στο Ethereum κάθε 12 δευτερόλεπτα (εκτός αν κάποιος που προτείνει block χάσει τη σειρά του), έτσι μια σχεδόν σταθερή ροή δεδομένων προστίθεται στους εξερευνήτες block. Τα block περιέχουν πολλά σημαντικά δεδομένα που μπορεί να σας φανούν χρήσιμα:

**Βασικά δεδομένα**

- Ύψος block - Ο αριθμός block και το μήκος της αλυσίδας blockchain (σε block) κατά τη δημιουργία του τρέχοντος block
- Χρονική σήμανση - Η ώρα κατά την οποία προτάθηκε ένα block
- Συναλλαγές - Ο αριθμός των συναλλαγών που περιλαμβάνονται στο block
- Αποδέκτης αμοιβής - Η διεύθυνση που έλαβε αμοιβές gas από συναλλαγές
- Ανταμοιβή μπλοκ - Το ποσό ETH που απονέμεται στον επικυρωτή που πρότεινε το μπλοκ.
- Μέγεθος - Το μέγεθος των δεδομένων μέσα στο μπλοκ (μετρημένο σε bytes)
- Gas που χρησιμοποιείται - Οι συνολικές μονάδες gas που χρησιμοποιούνται από τις συναλλαγές στο μπλοκ
- Όριο gas - Τα συνολικά όρια gas που ορίζονται από τις συναλλαγές στο μπλοκ
- Βασική χρέωση ανά gas - Ο ελάχιστος πολλαπλασιαστής που απαιτείται για να συμπεριληφθεί μια συναλλαγή σε ένα μπλοκ
- Καμένα τέλη - Πόσο ETH καίγεται στο μπλοκ
- Επιπλέον δεδομένα - Οποιαδήποτε επιπλέον δεδομένα έχει συμπεριλάβει ο δημιουργός στο μπλοκ

**Δεδομένα για προχωρημένους**

- Hash - Το κρυπτογραφικό hash που αντιπροσωπεύει την κεφαλίδα του μπλοκ (το μοναδικό αναγνωριστικό του μπλοκ)
- Γονικό hash - Το hash του μπλοκ που προηγήθηκε του τρέχοντος μπλοκ
- StateRoot - Η ρίζα hash του Merkle trie που αποθηκεύει ολόκληρη την κατάσταση του συστήματος

### Καύσιμα {#gas}

Οι εξερευνητές μπλοκ όχι μόνο θα σας δώσουν δεδομένα σχετικά με τη χρήση Gas σε συναλλαγές και μπλοκ, αλλά ορισμένοι θα σας δώσουν πληροφορίες για τις τρέχουσες τιμές gas του δικτύου. Αυτό θα σας βοηθήσει να κατανοήσετε τη χρήση του δικτύου, να υποβάλετε ασφαλείς συναλλαγές και να μην ξοδέψετε υπερβολικό gas. Αναζητήστε για API που μπορούν να σας βοηθήσουν να μεταφέρετε αυτές τις πληροφορίες στη διεπαφή του προϊόντος σας. Τα συγκεκριμένα δεδομένα για το gas καλύπτουν:

- Εκτιμώμενες μονάδες gas που απαιτούνται για μια ασφαλή αλλά αργή συναλλαγή (+ εκτιμώμενη τιμή και διάρκεια)
- Εκτιμώμενες μονάδες gas που απαιτούνται για μια μέση συναλλαγή (+ εκτιμώμενη τιμή και διάρκεια)
- Εκτιμώμενες μονάδες gas που απαιτούνται για μια γρήγορη συναλλαγή (+ εκτιμώμενη τιμή και διάρκεια)
- Μέσος χρόνος επιβεβαίωσης με βάση την τιμή του gas
- Συμβόλαια που καταναλώνουν gas - με άλλα λόγια, δημοφιλή προϊόντα που βλέπουν μεγάλη χρήση στο δίκτυο
- Λογαριασμοί που ξοδεύουν gas, με άλλα λόγια, συχνοί χρήστες του δικτύου

### Συναλλαγές {#transactions}

Οι εξερευνητές μπλοκ έχουν γίνει ένα κοινό μέρος για τους ανθρώπους να παρακολουθούν την πρόοδο των συναλλαγών τους. Αυτό συμβαίνει επειδή το επίπεδο λεπτομέρειας που μπορείτε να αποκτήσετε παρέχει επιπλέον βεβαιότητα. Τα δεδομένα συναλλαγών περιλαμβάνουν:

**Βασικά δεδομένα**

- Transaction hash - Ένας κρυπτογραφικός αριθμός που παράγεται όταν υποβάλλεται η συναλλαγή
- Status - Μια ένδειξη αν η συναλλαγή εκκρεμεί, απέτυχε ή ολοκληρώθηκε με επιτυχία
- Block - Το μπλοκ στο οποίο έχει συμπεριληφθεί η συναλλαγή
- Timestamp - Η χρονική στιγμή κατά την οποία μια συναλλαγή συμπεριλήφθηκε σε ένα μπλοκ που προτάθηκε από έναν επικυρωτή
- From - Η διεύθυνση του λογαριασμού που υπέβαλε τη συναλλαγή
- To - Η διεύθυνση του παραλήπτη ή του έξυπνου συμβολαίου με το οποίο αλληλεπιδρά η συναλλαγή
- Tokens transferred - Μια λίστα με τα token που μεταφέρθηκαν ως μέρος της συναλλαγής
- Value - Η συνολική αξία σε ETH που μεταφέρεται
- Transaction fee - Το ποσό που καταβάλλεται στον επικυρωτή για την επεξεργασία της συναλλαγής (υπολογίζεται από την τιμή του gas * το χρησιμοποιημένο gas)

**Δεδομένα για προχωρημένους**

- Gas limit - Ο μέγιστος αριθμός μονάδων gas που μπορεί να καταναλώσει αυτή η συναλλαγή
- Gas used - Η πραγματική ποσότητα μονάδων gas που κατανάλωσε η συναλλαγή
- Gas price - Η τιμή που ορίζεται ανά μονάδα gas
- Nonce - Ο αριθμός συναλλαγής `από` τη διεύθυνση (να θυμάστε ότι αυτό ξεκινά από το 0, οπότε ένα nonce `100` θα ήταν στην πραγματικότητα η 101η συναλλαγή που υποβλήθηκε από αυτόν τον λογαριασμό)
- Input data - Οποιαδήποτε πρόσθετη πληροφορία απαιτείται από τη συναλλαγή

### Λογαριασμοί {#accounts}

Υπάρχουν πολλά δεδομένα στα οποία μπορείτε να αποκτήσετε πρόσβαση σχετικά με έναν λογαριασμό. Γι' αυτό συνιστάται συχνά να χρησιμοποιείτε πολλούς λογαριασμούς, ώστε τα περιουσιακά σας στοιχεία και η αξία σας να μην μπορούν να παρακολουθούνται εύκολα. Υπάρχουν επίσης ορισμένες λύσεις που αναπτύσσονται για να γίνουν πιο ιδιωτικές οι συναλλαγές και η δραστηριότητες λογαριασμού. Αλλά εδώ είναι τα δεδομένα που είναι διαθέσιμα για λογαριασμούς:

**Λογαριασμός χρήστη**

- Διεύθυνση λογαριασμού - Η δημόσια διεύθυνση στην οποία μπορείτε να χρησιμοποιήσετε για να στείλετε χρήματα
- Υπόλοιπο ETH - Το ποσό του ETH που σχετίζεται με αυτόν τον λογαριασμό
- Συνολική αξία ETH - Η αξία του ETH
- Tokens - Τα διακριτικά που σχετίζονται με τον λογαριασμό και την αξία τους
- Ιστορικό συναλλαγών - Μια λίστα με όλες τις συναλλαγές στις οποίες αυτός ο λογαριασμός ήταν είτε ο αποστολέας είτε ο παραλήπτης

**Έξυπνα συμβόλαια**

Οι λογαριασμοί έξυπνων συμβολαίων έχουν όλα τα δεδομένα που θα έχει ένας λογαριασμός χρήστη, αλλά ορισμένοι εξερευνητές μπλοκ θα εμφανίζουν ακόμη και ορισμένες πληροφορίες κώδικα. Τα παραδείγματα περιλαμβάνουν:

- Δημιουργός συμβολαίου - Η διεύθυνση που ανέπτυξε τη συμβόλαιο στο Mainnet
- Συναλλαγή δημιουργίας - Η συναλλαγή που περιλάμβανε την ανάπτυξη στο Mainnet
- Source code - Ο κώδικας solidity ή vyper της έξυπνης σύμβασης
- Contract ABI - Το Application Binary Interface της σύμβασης—οι κλήσεις που κάνει η σύμβαση και τα δεδομένα που λαμβάνει
- Contract creation code - Ο μεταγλωττισμένος bytecode της έξυπνης σύμβαση, δημιουργείται όταν μεταγλωττίζετε μια έξυπνη σύμβαση γραμμένη σε Solidity ή Vyper, κ.λπ.
- Contract events - Ένα ιστορικό των μεθόδων που κλήθηκαν στην έξυπνη σύμβαση, βασικά ένας τρόπος να δείτε πώς χρησιμοποιείται η σύμβαση και πόσο συχνά

### Κρυπτονομίσματα {#tokens}

Τα token είναι ένας τύπος σύμβασης, επομένως θα έχουν παρόμοια δεδομένα με μια έξυπνη σύμβαση. Αλλά επειδή έχουν αξία και μπορούν να διαπραγματευτούν, έχουν πρόσθετα σημεία δεδομένων:

- Τύπος - Εάν είναι ERC-20, ERC-721 ή άλλο πρότυπο token
- Τιμή - Εάν είναι ERC-20 θα έχουν μια τρέχουσα αγοραία αξία
- Αγοραία κεφαλαιοποίηση - Εάν είναι ERC-20 θα έχουν μια αγοραία κεφαλαιοποίηση (υπολογίζεται από την τιμή * συνολική προσφορά)
- Συνολική προσφορά - Ο αριθμός των token σε κυκλοφορία
- Κάτοχοι - Ο αριθμός των διευθύνσεων που κατέχουν το token
- Μεταφορές - Ο αριθμός που έχει μεταφερθεί το token μεταξύ λογαριασμών
- Ιστορικό συναλλαγών - Ένα ιστορικό όλων των συναλλαγών συμπεριλαμβανομένου του token
- Διεύθυνση σύμβασης - Η διεύθυνση του token που αναπτύχθηκε στο Mainnet
- Δεκαδικά ψηφία - Τα token ERC-20 είναι διαιρετά και έχουν δεκαδικά ψηφία

### Δίκτυο {#network}

Μερικά δεδομένα μπλοκ αφορούν την υγεία του Ethereum πιο ολιστικά.

- Συνολικές συναλλαγές - Ο αριθμός των συναλλαγών από τη δημιουργία του Ethereum
- Συναλλαγές ανά δευτερόλεπτο - Ο αριθμός των συναλλαγών που μπορούν να επεξεργαστούν μέσα σε ένα δευτερόλεπτο
- Τιμή ETH - Οι τρέχουσα αξία για 1 ETH
- Συνολική προσφορά ETH - Αριθμός ETH σε κυκλοφορία, να θυμάστε ότι δημιουργείται νέο ETH με τη δημιουργία κάθε μπλοκ με τη μορφή ανταμοιβών μπλοκ
- Κεφαλαιοποίηση αγοράς - Υπολογισμός τιμής\* προσφοράς

## Δεδομένα συναινετικού επιπέδου {#consensus-layer-data}

### Εποχή {#epoch}

Για λόγους ασφαλείας, δημιουργούνται τυχαίες επιτροπές επικυρωτών στο τέλος κάθε εποχής (κάθε 6,4 λεπτά). Τα δεδομένα εποχής περιλαμβάνουν:

- Αριθμό εποχής
- Οριστικοποιημένη κατάσταση - Εάν η εποχή έχει οριστικοποιηθεί (Ναι/Όχι)
- Ώρα - Η ώρα που τελείωσε η εποχή
- Ο αριθμός των βεβαιώσεων σε μια εποχή (ψηφοφορίες για μπλοκ εντός διαστημάτων).
- Deposits - Ο αριθμός των καταθέσεων ETH που συμπεριλήφθηκαν στην εποχή (οι επικυρωτές πρέπει να καταθέσουν ETH για να γίνουν επικυρωτές).
- Slashings - Αριθμός ποινών που επιβλήθηκαν σε προτείνοντες μπλοκ ή επικυρωτές.
- Συμμετοχή στην Ψηφοφορία - Η ποσότητα του δεσμευμένου ETH που χρησιμοποιήθηκε για να βεβαιωθούν μπλοκ.
- Validators - Αριθμός επικυρωτών ενεργών για την εποχή
- Μέσο υπόλοιπο επικυρωτή - Μέσο υπόλοιπο για ενεργούς επικυρωτές
- Διαστήματα - Αριθμός διαστημάτων που συμπεριλήφθηκαν στην εποχή (τα διαστήματα περιλαμβάνουν ένα έγκυρο μπλοκ).

### Υποδοχή {#slot}

Οι υποδοχές είναι οι ευκαιρίες για τη δημιουργία ενός μπλοκ, τα διαθέσιμα δεδομένα για κάθε θέση περιλαμβάνουν:

- Εποχή - Η εποχή στην οποία το slot είναι έγκυρο
- Αριθμός υποδοχής
- Κατάσταση - Η κατάσταση του slot (Προτεινόμενο/Χαμένο)
- Χρόνος - Η χρονική σφραγίδα του slot
- Προτείνων - Ο επικυρωτής που πρότεινε το μπλοκ για το slot
- Ρίζα μπλοκ - Η ρίζα δέντρου κατακερματισμού του BeaconBlock
- Ρίζα γονέα - Ο κατακερματισμός του μπλοκ που προηγήθηκε
- Ρίζα κατάστασης - Η ρίζα δέντρου κατακερματισμού του BeaconState
- Υπογραφή
- Αποκάλυψη Randao
- Γκράφιτι - Ένας προτείνων μπλοκ μπορεί να συμπεριλάβει μήνυμα 32 byte στο προτεινόμενο μπλοκ του
- Δεδομένα εκτέλεσης
  - Αναγνωριστικό μπλοκ
  - Αριθμός καταθέσεων
  - Ρίζα κατάθεσης
- Βεβαιώσεις - Αριθμός βεβαιώσεων για το μπλοκ σε αυτό το slot
- Καταθέσεις - Ο αριθμός των καταθέσεων κατά τη διάρκεια αυτού του slot
- Εθελούσιες εξόδοι - Ο αριθμός των επικυρωτών που έφυγαν κατά τη διάρκεια του slot
- Slashings - Αριθμός ποινών που επιβλήθηκαν σε προτείνοντες μπλοκ ή επικυρωτές.
- Ψήφοι - Οι επικυρωτές που ψήφισαν για το μπλοκ σε αυτό το slot

### Μπλοκ {#blocks-1}

Η απόδειξη συμμετοχής χωρίζει τον χρόνο σε slots και εποχές. Αυτό λοιπόν σημαίνει νέα δεδομένα!

- Προτείνων - Ο επικυρωτής που επιλέχθηκε αλγοριθμικά για να προτείνει το νέο μπλοκ
- Εποχή - Η εποχή κατά την οποία προτάθηκε το μπλοκ
- Slot - Το slot στο οποίο προτάθηκε το μπλοκ
- Βεβαιώσεις - Ο αριθμός των βεβαιώσεων που περιλαμβάνονται στο slot - οι βεβαιώσεις είναι σαν ψήφοι που υποδεικνύουν ότι το μπλοκ είναι έτοιμο να πάει στην αλυσίδα Beacon

### Επικυρωτές {#validators}

Οι επικυρωτές είναι υπεύθυνοι για την πρόταση μπλοκ και την βεβαίωσή τους εντός των υποδοχών.

- Αριθμός επικυρωτή - Μοναδικός αριθμός που αντιπροσωπεύει τον επικυρωτή
- Τρέχον υπόλοιπο - Το υπόλοιπο του επικυρωτή συμπεριλαμβανομένων των ανταμοιβών
- Ενεργό υπόλοιπο - Το υπόλοιπο του επικυρωτή που χρησιμοποιείται για αποθήκευση
- Εισόδημα - Οι ανταμοιβές ή οι ποινές που έλαβε ο επικυρωτής
- Κατάσταση - Εάν το πρόγραμμα επικύρωσης είναι επί του παρόντος συνδεδεμένο και ενεργό ή όχι
- Αποτελεσματικότητα επικύρωσης: Ο μέσος χρόνος που χρειάζεται για να συμπεριληφθούν οι επικυρώσεις του επικυρωτή στην αλυσίδα.
- Καταλληλότητα για ενεργοποίηση - Ημερομηνία (και εποχή) κατά την οποία ο επικυρωτής έγινε διαθέσιμος για επικύρωση
- Ενεργό από - Ημερομηνία (και εποχή) που έγινε ενεργός ο επικυρωτής
- Προτεινόμενα μπλοκ - Το μπλοκ που έχει προτείνει ο επικυρωτής
- Επικυρώσεις - Οι επικυρώσεις που έχει παρέχει ο επικυρωτής.
- Καταθέσεις - Η διεύθυνση από την οποία έγινε η κατάθεση, το hash της συναλλαγής, ο αριθμός του μπλοκ, η χρονική σφραγίδα, το ποσό και η κατάσταση της κατάθεσης που έγιναν από τον Επικυρωτή.

### Επαληθεύσεις {#attestations}

Οι βεβαιώσεις είναι ψήφοι «ναι» για τη συμπερίληψη μπλοκ στην αλυσίδα. Τα δεδομένα τους σχετίζονται με ένα αρχείο της βεβαίωσης και τους επικυρωτές που βεβαίωσαν

- Slot: Το χρονικό διάστημα κατά το οποίο έγινε η επικύρωση.
- Δείκτης επιτροπής: Ο δείκτης της επιτροπής που συμμετείχε σε αυτήν την επικύρωση.
- Bits συσσωμάτωσης: Αντιπροσωπεύει τη συσσωματωμένη επικύρωση όλων των συμμετεχόντων επικυρωτών στην επικύρωση.
- Επικυρωτές: Οι επικυρωτές που παρείχαν επικυρώσεις.
- Root μπλοκ beacon: Δείχνει στο μπλοκ στο οποίο οι επικυρωτές κάνουν επικύρωση.
- Πηγή - Παραπέμπει στην τελευταία δικαιολογημένη εποχή
- Στόχος: Δείχνει στο όριο της τελευταίας εποχής.
- Υπογραφή

### Δίκτυο {#network-1}

Τα δεδομένα ανωτάτου επιπέδου του επιπέδου συναίνεσης περιλαμβάνουν τα ακόλουθα:

- Τρέχουσα εποχή
- Τρέχουσα υποδοχή
- Ενεργοί επικυρωτές - Αριθμός ενεργών επικυρωτών
- Εκκρεμείς επικυρωτές - Αριθμός επικυρωτών που περιμένουν να ενεργοποιηθούν
- Staked ETH: Το συνολικό ποσό του ETH που έχει δεσμευτεί στο δίκτυο.
- Μέσο υπόλοιπο - Μέσο υπόλοιπο ETH επικυρωτών

## Εξερευνητές Block {#block-explorers}

- [Etherscan](https://etherscan.io/) - ένας εξερευνητής μπλοκ που μπορείτε να χρησιμοποιήσετε για την ανάκτηση δεδομένων για το Ethereum Mainnet και το Goerli Testnet
- [3xpl](https://3xpl.com/ethereum): Ένας ανοιχτού κώδικα εξερευνητής Ethereum χωρίς διαφημίσεις που επιτρέπει τη λήψη των συνόλων δεδομένων του.
- [Beaconcha.in](https://beaconcha.in/): Ένας ανοιχτού κώδικα εξερευνητής μπλοκ για το κύριο δίκτυο του Ethereum και το δοκιμαστικό δίκτυο Goerli.
- [Blockchair](https://blockchair.com/ethereum): ο πιο ιδιωτικός εξερευνητής Ethereum. Επίσης για ταξινόμηση και φιλτράρισμα δεδομένων του mempool.
- [Etherchain](https://www.etherchain.org/) - ένας εξερευνητής μπλοκ για το κεντρικό δίκτυο του Ethereum
- [Ethplorer](https://ethplorer.io/): Ένας εξερευνητής μπλοκ με έμφαση στα tokens για το κύριο δίκτυο του Ethereum και το δοκιμαστικό δίκτυο Kovan.
- [Rantom](https://rantom.app/) - Ένας φιλικός προς το χρήστη ανοιχτού κώδικα DeFi & NFT προβολής συναλλαγών για λεπτομερείς πληροφορίες
- [Ethernow](https://www.ethernow.xyz/): Ένας εξερευνητής συναλλαγών σε πραγματικό χρόνο που σας επιτρέπει να δείτε το προ-αλυσίδα επίπεδο του κύριου δικτύου Ethereum.

## Περισσότερες πληροφορίες {#further-reading}

_Γνωρίζετε κάποιο πόρο της κοινότητας που σας βοήθησε; Επεξεργαστείτε αυτή τη σελίδα και προσθέστε το!_

## Σχετικά θέματα {#related-topics}

- [Συναλλαγές](/developers/docs/transactions/)
- [Λογαριασμοί](/developers/docs/accounts/)
- [Δίκτυα](/developers/docs/networks/)