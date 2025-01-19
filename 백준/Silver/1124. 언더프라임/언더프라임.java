import java.util.*;
import java.io.*;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;
    static boolean[] arr;
    static int[] count;
    public static void main(String[] args) throws Exception {
        st = new StringTokenizer(br.readLine());
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
       arr = new boolean[100001];
       count = new int[100001];
       arr[0] = arr[1] = true;
       for(int i=2; i<100001; i++){
           if(arr[i]){
               continue;
           }
           for(int j=i+i; j<100001; j+=i){
               arr[j] = true;
               int temp = j;
               while(temp%i == 0){
                   temp /= i;
                   count[j]++;
               }
           }
       }
       int result = 0;
       for(int i=A; i<=B; i++){
           if(!arr[count[i]]){
               result++;
           }
       }
        System.out.println(result);

    }


}