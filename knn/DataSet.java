import java.io.FileWriter; 
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.*; 

public class DataSet {
  public static void main(String[] args) throws Exception {
    try {

		Long a = new Long("9999999999"), b = new Long("99999999999");

		Set<Long> set = new HashSet<Long>();

		for(int i=0; i<1000; i++)   set.add( ThreadLocalRandom.current().nextLong(a,b));

		List<Long> aList = set.stream().collect(Collectors.toList()); 

		Collections.sort(aList);

		FileWriter myWriter = new FileWriter("DataSet.csv");

		myWriter.write("ABC_%,D_%,C_%,AAC_%,A_%,V_%,ABC_T,D_T,C_T,AAC_T,A_T,LS\n");

		for(int i=0; i<aList.size(); i++) {
			List<String> rowArr = Arrays.asList((aList.get(i)+"").split(""));
			String rowString = String.join(",",rowArr)+",";

			List<Integer> intArr = new ArrayList<Integer>();

			for (String string : rowString.split(",")) {
				if(string.chars().allMatch(Character::isDigit))
					intArr.add(Integer.parseInt(string));
			}

			int ABC = intArr.get(0),
			D = intArr.get(1),
			C = intArr.get(2),
			AAC = intArr.get(3),
			A = intArr.get(4),
			V = intArr.get(5),
			ABC_T = intArr.get(6), 
			D_T = intArr.get(7),
			C_T = intArr.get(8),
			AAC_T = intArr.get(9),
			A_T = intArr.get(10);


			if(A > AAC && A_T > AAC_T) rowString+='a';
			else rowString+='r';

			if(C > D && C_T > D_T) rowString+='s';
			else rowString+='i';

			if( V == 9) rowString+='v';
			else rowString+='r';

			if(ABC+AAC+ABC_T > ABC+C+AAC) rowString+='g';
			else rowString+='s';

      		myWriter.write(rowString+"\n");
  		}

      myWriter.close(); 
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}


// IF A, AT > AAC, AACT then a ELSE r
// IF C, CT > D, DT then s ELSE i
// IF VS, VS_T = 100% then v ELSE r (for reader or verbal)
// IF ABC, ABC_T, AAC, > ABC,C,AAC then g ELSE s


