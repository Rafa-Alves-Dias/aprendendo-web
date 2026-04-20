#include <iostream>
using namespace std;

int main() {
    int numero;
    
    cout << "Digite um número inteiro: ";
    cin >> numero;
    
    if (numero % 2 == 0) {
        cout << "O número " << numero << " é PAR." << endl;
    } else {
        cout << "O número " << numero << " é ÍMPAR." << endl;
    }
    
    return 0;
}